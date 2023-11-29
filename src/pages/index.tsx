import Link from "next/link";
import Image from "next/image";
import { api } from "~/utils/api";
import { FaLinkedin,  } from "react-icons/fa";
import { useRouter } from "next/router";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import Graph from "~/components/graph/graph";
import data from "../components/graph/miserables";
import { zodResolver } from "@hookform/resolvers/zod";
import { Icons } from "./../components/ui/icons";
import { Button } from "./../components/ui/button";
import { Input } from "./../components/ui/input";
import React, { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./../components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuTrigger } from "~/components/ui/dropdown-menu";
import { d3Types } from "~/components/graph/types";
import { link } from "fs";
import Error from "next/error";
import {BetaSignUp} from "~/components/beta-sign-up-form";
import Header from "~/components/landingPage/header";
import Newsletter from "~/components/landingPage/newsletter";
import Footer from "~/components/landingPage/footer";
/**
 * <div className="body-font">
          <div className="container justify-between items-center flex flex-wrap p-5 md:flex-row">
            <Image src="/name_logo.png"
              width={400}
              height={400}
              className="h-auto w-auto"
              alt="GoalTac Logo"/>
            <Button onClick={()=>router.push('/login')}
            className="px-4 py-2 mt-2 text-md font-bold">
              Login
            </Button>
          </div>
          
        </div>
 * @returns 
 */
export default function Landing() {

  const router = useRouter()

  return (
    <main className="flex min-h-screen w-screen flex-col bg-white bg-no-repeat bg-contain bg-[url('/wave.svg')]">
      <div className='w-full'>
        {/* Header */}
        <Header/>
        <div className="container flex-col gap-12 px-4 py-16">
          <Main />
          <Newsletter/>
          {/* Footer */}
          <Footer/>
        </div>
      </div>
    </main>
  );
}



//for the main body of the landing page
export function Main() {
  return (
    <section className="text-black body-font lg:pt-20 flex flex-col gap-20 ">
      <div className="w-full pt-20 mb-96 mx-auto lg:px-4 lg:py-4">

      <div className="md:justify-between flex flex-col md:flex-row mx-auto">
          {/* The description of goaltac */}
          <div className="flex flex-col max-w-2xl mb-2 text-center mx-10">
            <h1 className="mb-2 text-4xl font-bold tracking-tighter text-gray-900 lg:text-6xl md:text-5xl">
              <span>Build Your</span>
              <br className="hidden md:block"></br>
              {' '}True Network
            </h1>
            <br></br>
            <p className="text-xl mx-auto font-normal leading-relaxed text-gray-900 dark:text-gray-900 lg:w-2/3">
              GoalTac is a social networking application to help you grow quality professional relationships through your mutual connections.
            </p>
          </div>
          <div className='mt-auto md:mr-20'>
            <div className="w-full mx-auto h-min dark:border dark:border-gray-700 dark:bg-gray-800 w-min md:mt-14 xl:p-0">
              <BetaSignUp/>
            </div>
          </div>
          
        </div>
      </div>
        
      <div className="hidden lg:block mx-auto ">
        <h3 className="mb-4 text-3xl font-bold tracking-tighter text-gray-900 2xl:text-4xl lg:text-3xl">
          <span>What your network might look like</span>
        </h3>
        <InteractiveGraph/>
      </div>
      
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 w-full">
          {/*<div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <img src="/name_logo.png"
                width=''
                height={40}
                className="object-cover object-center h-full w-full"
                alt="GoalTac Logo"/>
           </div>*/}
          <div className="mx-auto flex flex-wrap justify-center text-center">
            <div className="flex flex-col mb-10 items-center">
              <div className="flex-grow max-w-sm">
                <h2 className="text-black text-2xl title-font font-medium mb-3">
                  Easy Networking
                </h2>
                <p className="leading-relaxed text-lg">
                  Request introductions from your mutual connections to meet with people of interest
                </p>
              </div>
            </div>
            <div className="flex flex-col mb-10 items-center">
              <div className="flex-grow max-w-sm">
                <h2 className="text-black text-2xl title-font font-medium mb-3">
                  Quality Relationships
                </h2>
                <p className="leading-relaxed text-lg">
                  Send silent connection requests to potential connections and interact with your network regularly to keep up your network's status
                </p>
              </div>
            </div>
            <div className="flex flex-col mb-10 items-center">
              <div className="flex-grow max-w-sm">
                <h2 className="text-black text-2xl title-font font-medium mb-3">
                  Discover Real People
                </h2>
                <p className="leading-relaxed text-lg">
                  Use AI to search through the professional background of your network and extended connections
                </p>
              </div>
            </div>
            <div className="flex flex-col mb-10 items-center">
              <div className="flex-grow max-w-sm">
                <h2 className="text-black text-2xl title-font font-medium mb-3">
                  Fun and Engaging
                </h2>
                <p className="leading-relaxed text-lg">
                  Networking is gamified to incentivize reaching out to new connections and building the relationship of current ones 
                </p>
              </div>
            </div>
            <div className="flex flex-col mb-10 items-center">
              <div className="flex-grow max-w-sm">
                <h2 className="text-black text-2xl title-font font-medium mb-3">
                  Visually Stunning
                </h2>
                <p className="leading-relaxed text-lg">
                  Map the strength and number of your connections through stunning network graphs
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 mx-auto">
          <div className="text-center mb-20">
            <h2 className="sm:text-5xl font-medium title-font text-black mb-4">
              Our Team
            </h2>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
              Here is our company
            </p>
            <div className="w-full py-12">
              <div className="flex flex-wrap gap-x-20 gap-y-10 justify-center">
                <div className="h-full flex flex-col items-center text-center">
                  <img
                    alt="team" width={300} height={300}
                    className="flex-shrink-0 rounded-lg object-cover object-center mb-4" src="/My.jpeg"></img>
                  <div className="w-full">
                    <h2 className="title-font font-medium text-lg text-black">
                      My Phung
                    </h2>
                    <h3 className="text-gray-500 mb-3">Web Developer</h3>
                    <p className="mb-4 max-w-sm">
                      I am a highly motivated and innovative individual with a deep passion for problem-solving. My academic journey in economics and computer science has honed my analytical thinking and interdisciplinary approach to challenges. Entrepreneurial by nature, I thrive on leading teams and developing solutions that drive positive change. With strong technical skills, I am always eager to explore new horizons and make a meaningful impact.
                    </p>
                    
                  </div>
                </div>
                <div className="h-full flex flex-col items-center text-center">
                <img
                    alt="team" width={300} height={300}
                    className="flex-shrink-0 rounded-lg object-cover object-center mb-4" src="/Nikhil.jpeg"
                  ></img>
                  <div className="w-full">
                    <h2 className="title-font font-medium text-lg text-black">
                      Nikhil Ghosh
                    </h2>
                    <h3 className="text-gray-500 mb-3">Web Developer</h3>
                    <p className="mb-4 max-w-sm">
                      I am a purpose-driven individual studying computer science at the University of Connecticut. I also teach, innovate, volunteer, and try to grow. Well-being and relationships are most important to me, and I enjoy meeting people and exploring. 
                    </p>
                    
                </div>
                </div>
                <div className="h-full flex flex-col items-center text-center">
                  <img alt="team" width={300} height={300}
                    className="flex-shrink-0 rounded-lg object-cover object-center mb-4"
                    src="/Jamison.png"
                  ></img>
                  <div className="w-full">
                    <h2 className="title-font font-medium text-lg text-black">
                      Jamison Coté
                    </h2>
                    <h3 className="text-gray-500 mb-3">Web Developer</h3>
                    <p className="mb-4 max-w-sm">
                    Creative Visionary and Data-Driven Designer | I once co-developed a mental health platform that gained 400 users in less than 4 months while a fulltime student. I also designed an autofill browser extension that reduced form filling time by 60%. I love understanding how people think/interact with the world and turning those insights into delightful designs.
                    </p>
                </div>
                </div>
                <div className="h-full flex flex-col items-center text-center">
                  <img alt="team" width={300} height={300}
                    className="flex-shrink-0 rounded-lg object-cover object-center mb-4" src="/Mayur.jpeg"></img>
                  <div className="w-full">
                    <h2 className="title-font font-medium text-lg text-black">
                      Mayurapriyan Somalinga
                    </h2>
                    <h3 className="text-gray-500 mb-3">Web Developer</h3>
                    <p className="mb-4 max-w-sm">
                      I am a junior at UConn, pursuing a major in Psychological Sciences and a minor in Cognitive Science. I am highly motivated to work in the realms of human resources and/or data science, with a few years of programming experience, namely in Java and C++, but most recently in Python, which is the language I'm most comfortable in
                    </p>
                  </div>
                </div>
                <div className="h-full flex flex-col items-center text-center">
                  <img alt="team" width={300} height={300}
                    className="flex-shrink-0 rounded-lg object-cover object-center mb-4" src="/John-Michael.jpeg"></img>
                  <div className="w-full">
                    <h2 className="title-font font-medium text-lg text-black">
                      John-Michael Mendez
                    </h2>
                    <h3 className="text-gray-500 mb-3">Web Developer</h3>
                    <p className="mb-4 max-w-sm">
                      John-Michael is part of our front-end team providing amazing
                      websites.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
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
                          <DropdownMenuContent>
                            <DropdownMenuRadioGroup className="overflow-auto h-48 max-h-full" value={form.getValues().source} onValueChange={(value)=>form.setValue('source', value)}>
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
                type="submit"
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