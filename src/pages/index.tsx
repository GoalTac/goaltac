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
import Header from "~/components/landingPage/header";
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
          {/* Footer */}
          <footer className="text-black body-font">
          <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
            <a className="flex title-font font-medium items-center md:justify-start justify-center" href="/">
              <Image src="/name_logo.png"
                width={80}
                height={40}
                className="h-auto w-auto"
                alt="GoalTac Logo"/>
            </a>
            
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <a className="ml-3 size:2xl" target='_blank' href="https://www.linkedin.com/company/92931369/">
                <FaLinkedin/>
              </a>
            </span>
          </div>
        </footer>
        </div>
      </div>
    </main>
  );
}



//for the main body of the landing page
export function Main() {
  return (
    <section className="text-black body-font lg:pt-20 flex flex-col gap-20 ">
      <div className="container h-[80vh] pt-20 mx-auto lg:px-4 lg:py-4">
        <div className="flex flex-col w-full mb-2 text-left md:text-center ">
          <h1 className="mb-2 text-6xl font-bold tracking-tighter text-gray-900 lg:text-8xl md:text-7xl">
            <span>Build Your</span>
            <br className="hidden lg:block"></br>
            {' '}True Network
          </h1>
          <br></br>
          <p className="mx-auto  text-xl font-normal leading-relaxed text-gray-900 dark:text-gray-900 lg:w-2/3">
            GoalTac helps you initiate and build high-quality professional relationships through mutual connections with the visualization of your network in relation to you never seen before.
          </p>
        </div>
      </div>
      <div className="hidden md:block mx-auto">
        <h3 className="mb-2 text-3xl font-bold tracking-tighter text-gray-900 lg:text-4xl md:text-3xl">
            <span>Manage your connections easily</span>
          </h3>
        <InteractiveGraph/>
      </div>
      
      <section className="text-gray-600 body-font">
        {/* 
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-10 mx-auto">
            <div className="flex flex-wrap -m-4 text-center">
              <div className="p-4 sm:w-1/3 w-1/2">
                <h2 className="title-font font-medium sm:text-5xl text-3xl text-black">
                  <CountUp end={940} redraw={true}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                </h2>
                <p className="leading-relaxed">Users</p>
              </div>
              <div className="p-4 sm:w-1/3 w-1/2">
                <h2 className="title-font font-medium sm:text-5xl text-3xl text-black">
                  <CountUp end={740} redraw={true}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                </h2>
                <p className="leading-relaxed">Subscribes</p>
              </div>
              <div className="p-4 sm:w-1/3 w-1/2">
                <h2 className="title-font font-medium sm:text-4xl text-3xl text-black">
                  <CountUp end={315} redraw={true}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                </h2>
                <p className="leading-relaxed">Downloads</p>
              </div>
            </div>
          </div>
        </section>
        */}
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <img
              alt="feature"
              className="object-cover object-center h-full w-full"
              src="./images/placeholder.png"
            ></img>
          </div>
          <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="flex-grow">
                <h2 className="text-black text-2xl title-font font-medium mb-3">
                  Free
                </h2>
                <p className="leading-relaxed text-lg">
                  All of our templates are 100% free forever.
                </p>
              </div>
            </div>
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="flex-grow">
                <h2 className="text-black text-2xl title-font font-medium mb-3">
                  Responsive
                </h2>
                <p className="leading-relaxed text-lg">
                  All our templates come with full responsiveness straight out
                  of the box.
                </p>
              </div>
            </div>
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="flex-grow">
                <h2 className="text-black text-2xl title-font font-medium mb-3">
                  SEO Friendly
                </h2>
                <p className="leading-relaxed text-lg">
                  Our templates have the best SEO practices ensuring you get to
                  the top.
                </p>
              </div>
            </div>
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="flex-grow">
                <h2 className="text-black text-2xl title-font font-medium mb-3">
                  Fast
                </h2>
                <p className="leading-relaxed text-lg">
                  The fastest websites you can get.
                </p>
              </div>
            </div>
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="flex-grow">
                <h2 className="text-black text-2xl title-font font-medium mb-3">
                  Google Analytics Supported
                </h2>
                <p className="leading-relaxed text-lg">
                  All our templates come with full support for Google Analytics.
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
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-white inline-flex"></div>
            </div>
            <div className="container px-5 py-16 mx-auto">
              <div className="flex flex-wrap -m-4">
                <div className="p-4 lg:w-1/4 md:w-1/2">
                  <div className="h-full flex flex-col items-center text-center">
                    <img
                      alt="team"
                      className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                      src="./images/placeholder.png"
                    ></img>
                    <div className="w-full">
                      <h2 className="title-font font-medium text-lg text-black">
                        Chris
                      </h2>
                      <h3 className="text-gray-500 mb-3">Web Developer</h3>
                      <p className="mb-4">
                        Chris is part of our front-end team providing amazing
                        websites.
                      </p>
                      <span className="inline-flex">
                        <a className="text-gray-500">
                          <svg
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                          </svg>
                        </a>
                        <a className="ml-2 text-black">
                          <svg
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                          </svg>
                        </a>
                        <a className="ml-2 text-gray-500">
                          <svg
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                          </svg>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-4 lg:w-1/4 md:w-1/2">
                  <div className="h-full flex flex-col items-center text-center">
                    <img
                      alt="team"
                      className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                      src="./images/placeholder.png"
                    ></img>
                    <div className="w-full">
                      <h2 className="title-font font-medium text-lg text-black">
                        Chris
                      </h2>
                      <h3 className="text-gray-500 mb-3">Web Developer</h3>
                      <p className="mb-4">
                        Chris is part of our front-end team providing amazing
                        websites.
                      </p>
                      <span className="inline-flex">
                        <a className="text-gray-500">
                          <svg
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                          </svg>
                        </a>
                        <a className="ml-2 text-gray-500">
                          <svg
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                          </svg>
                        </a>
                        <a className="ml-2 text-gray-500">
                          <svg
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                          </svg>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-4 lg:w-1/4 md:w-1/2">
                  <div className="h-full flex flex-col items-center text-center">
                    <img
                      alt="team"
                      className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                      src="./images/placeholder.png"
                    ></img>
                    <div className="w-full">
                      <h2 className="title-font font-medium text-lg text-black">
                        Chris
                      </h2>
                      <h3 className="text-gray-500 mb-3">Web Developer</h3>
                      <p className="mb-4">
                        Chris is part of our front-end team providing amazing
                        websites.
                      </p>
                      <span className="inline-flex">
                        <a className="text-gray-500">
                          <svg
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                          </svg>
                        </a>
                        <a className="ml-2 text-gray-500">
                          <svg
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                          </svg>
                        </a>
                        <a className="ml-2 text-gray-500">
                          <svg
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                          </svg>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-4 lg:w-1/4 md:w-1/2">
                  <div className="h-full flex flex-col items-center text-center">
                    <img
                      alt="team"
                      className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                      src="./images/placeholder.png"
                    ></img>
                    <div className="w-full">
                      <h2 className="title-font font-medium text-lg text-black">
                        Chris
                      </h2>
                      <h3 className="text-gray-500 mb-3">Web Developer</h3>
                      <p className="mb-4">
                        Chris is part of our front-end team providing amazing
                        websites.
                      </p>
                      <span className="inline-flex">
                        <a className="text-gray-500">
                          <svg
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                          </svg>
                        </a>
                        <a className="ml-2 text-gray-500">
                          <svg
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                          </svg>
                        </a>
                        <a className="ml-2 text-gray-500">
                          <svg
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                          </svg>
                        </a>
                      </span>
                    </div>
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
                            placeholder="Enter a source node" {...field} />
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
                            placeholder="Enter a target node" {...field} />
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
                Connect!
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