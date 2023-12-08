import { useRouter } from "next/router";
import { LandingLayout } from "~/components/layouts/landing-layout";
import Graph from "~/components/graph/graph";
import data from "../components/graph/miserables";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "./../components/ui/button";
import { Input } from "./../components/ui/input";
import React, { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "./../components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { DropdownMenu, DropdownMenuContent, DropdownMenuPortal, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuTrigger } from "~/components/ui/dropdown-menu";
import { d3Types } from "~/components/graph/types";
import { toast } from "~/components/ui/use-toast";
import Image from "next/image";

export default function Demo() {
    const router = useRouter()
    return (<LandingLayout>
      <div className="items-center flex-col flex">
        <div className="w-fit">
          <h3 className="mb-4 text-3xl font-bold tracking-tighter text-gray-900 2xl:text-4xl lg:text-3xl w-fit">
            <p>Your Network Visualized</p>
            <p className="font-normal text-gray-500 text-2xl">- Try connecting two people!</p>
          </h3>
          <InteractiveGraph/>
        </div>
        
      </div>
      <section className="text-gray-600 body-font mt-16">
        <div className="container px-5 w-full">
          <div className="flex flex-col items-center gap-12">
            <div className="flex md:flex-row flex-col-reverse gap-12 text-center items-center md:items-start">
              <div className="flex flex-col md:mb-10 items-center">
                <div className="flex-grow max-w-md">
                  <h2 className="text-gray-700 font-black text-4xl mb-3">
                    Nodes
                  </h2>
                  <p className="leading-relaxed text-lg">
                    They are the circles within your network diagram representing the people you have met and your relative connection quality based on interactions.
                  </p>
                  <div className="flex flex-col md:flex-row gap-4 py-4 w-full pt-8">
                    <p className="font-black text-2xl md:text-left md:w-2/3">SIZE</p>
                    <p className="text-lg text-center md:text-left">
                      Represents the quality of the connection between you and the person by tracking the amount of introductions made with them and chat messages exchanged. 
                    </p>
                  </div>
                  <div className="flex flex-col md:flex-row gap-4 py-4 w-full">
                    <p className="font-black text-2xl">COLOR</p>
                    <p className="text-lg text-center md:text-left">
                      Used to filter and organize connections into categories of interest, or to denote people of interest during search.
                    </p>
                  </div>
                </div>
              </div>
              <Image src="/Node_network.svg"
                width={300}
                height={300}
                className=""
                alt="GoalTac Logo"/>
            </div>
            <div className="flex md:flex-row flex-col gap-12 text-center items-center md:items-start">
              <Image src="/Link_network.svg"
                width={300}
                height={300}
                className=""
                alt="GoalTac Logo"/>
              <div className="flex flex-col md:mb-10 items-center">
                <div className="flex-grow max-w-md">
                  <h2 className="text-gray-700 font-black text-4xl mb-3">
                    Links
                  </h2>
                  <p className="leading-relaxed text-lg">
                    The lines drawn between two nodes represent the relationship two people have within your network.
                  </p>
                  <div className="flex flex-col md:flex-row  gap-4 py-4 w-full pt-8">
                    <p className="font-black text-2xl">WIDTH</p>
                    <p className="text-lg text-center md:text-left">
                      The width of the line represents the strength of the relationships your connections have with one another. It becomes thinner the less they interact with one another until it may disappear.
                    </p>
                  </div>
                  <div className="flex flex-col md:flex-row  gap-4 py-4 w-full">
                    <p className="font-black text-2xl">COLOR</p>
                    <p className="text-lg text-center md:text-left">
                      Used to filter and organize people of interest in relation to each other. When introducing two connections to each other, colors can denote commonalities of interest.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </LandingLayout>);
}

function InteractiveGraph() {

  const [nodes, setNodes] = useState<d3Types.d3Node[]>(data.nodes)
  const [links, setLinks] = useState<d3Types.d3Link[]>(data.links)

  function LinkForm() {

    const formSchema = z.object({
      source: z.string(),
      target: z.string(),
      value: z.number()
    });
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        source: "",
        target: "",
        value: 1
      },
    });
    function onSubmit(formData: z.infer<typeof formSchema>) {

      //if user calls exisiting node
      const foundSource = nodes.filter((node)=> node.id == formData.source)

      //if user calls existing node
      const foundTarget = nodes.filter((node)=> node.id == formData.target)

      if (foundTarget.length == 0 && foundSource.length == 0) {
        form.reset()
        form.setError("target", { type: 'custom', message: 'Select an existing person' });
        setTimeout(()=>{
          form.clearErrors("target")
        },2000)
        return
      } 
      //if they are the same people

      if (foundTarget[0]?.id == foundSource[0]?.id) {
        form.reset()
        form.setError("source", { type: 'custom', message: 'Please select different people' });
        setTimeout(()=>{
          form.clearErrors("source")
        },2000)
        return
      }

      if (foundSource.length == 0) {
        setNodes([...nodes, {id: formData.source, group: 1}])
      }
      if (foundTarget.length == 0) {
        setNodes([...nodes, {id: formData.target, group: 1}])
      }
      setLinks([...links, {source: formData.source, target: formData.target, value: formData.value}])



      form.reset()
    }

    
    return (<div className="w-full">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} name='root'>
            <div className="flex gap-4">
            <div className='w-full'>
                <FormField
                  control={form.control}
                  name='source'
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Input type='text' className="text-black"
                            placeholder="Enter someone to connect from" {...field} />
                          </DropdownMenuTrigger>
                          <DropdownMenuPortal>
                            <DropdownMenuContent>
                              <DropdownMenuRadioGroup className="overflow-auto h-48 max-h-full" value={form.getValues().source} onValueChange={(value)=>form.setValue('source', value)}>
                                {nodes.map((node: { id: string, group: number})=>{
                                  return <DropdownMenuRadioItem key={node.id} value={node.id}>
                                    {node.id}
                                  </DropdownMenuRadioItem>
                                })}
                              </DropdownMenuRadioGroup>
                            </DropdownMenuContent>
                          </DropdownMenuPortal>
                         
                        </DropdownMenu>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className='w-full'>
                <FormField
                  control={form.control}
                  name='target'
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Input type='text' className="text-black"
                            placeholder="Enter someone to connect with" {...field} />
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            <DropdownMenuRadioGroup className="overflow-auto h-48 max-h-full" value={form.getValues().target} onValueChange={(value)=>form.setValue('target', value)}>
                              {nodes.map((node: { id: string, group: number})=>{
                                return <DropdownMenuRadioItem key={node.id} value={node.id}>
                                  {node.id}
                                </DropdownMenuRadioItem>
                              })}
                            </DropdownMenuRadioGroup>
                            
                          </DropdownMenuContent>
                        </DropdownMenu>
                        
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className='max-w-full'></div>
              <Button
                type="submit" onClick={()=>{
                  toast({
                    variant: "success",
                    title: "Connected",
                    description:
                      `You connected ${form.getValues().source} and ${form.getValues().target}`,
                  });
                }}
                className="wifocus:ring-primary-300 w-min dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 rounded-lg text-center text-sm font-medium text-white focus:outline-none focus:ring-4">
                Connect
              </Button>
            </div>
          </form>
        </Form>
      </div>)
  }

//make the width and height changeable
  return <div className='w-min grid gap-4'>
    <LinkForm/>
    <Graph width={800} height={600} graph={{nodes, links}} />
  </div>
}