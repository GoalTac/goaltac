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
import React, { ReactElement, useState } from "react";
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
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuPortal, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuTrigger } from "~/components/ui/dropdown-menu";
import { d3Types } from "~/components/graph/types";
import { link } from "fs";
import Error from "next/error";
import {BetaSignUp} from "~/components/beta-sign-up-form";
import Header from "~/components/landingPage/header";
import Newsletter from "~/components/landingPage/newsletter";
import Footer from "~/components/landingPage/footer";
import Head from "next/head";
import { toast } from "~/components/ui/use-toast";
import { LandingLayout } from "~/components/layouts/landing-layout";
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
//bg-no-repeat bg-center bg-contain bg-[url('/network_background.png')]
  const router = useRouter()
  return (<main className="flex min-h-screen w-screen flex-col bg-white">
    <Head>
      <title>
        GoalTac
      </title>
      <link rel="icon" href="/icon_logo.png"/>
      <meta
        name="description" key="desc"
        content="An online networking application to track, maintain, and build quality professional relationships with people of interest through shared mutual connections."
      />
    </Head>
    <div className="w-full bg-no-repeat bg-contain bg-[url('/wave.svg')]">
      <LandingLayout>
        <Main />
      </LandingLayout>
    </div>
  </main>);
}



//for the main body of the landing page
export function Main() {
  return (
    <section className="text-black body-font flex flex-col gap-20">
      <div className="w-full mx-auto lg:px-4 lg:py-4">

        <div className="md:justify-between flex flex-col md:flex-row mx-auto gap-12 md:gap-0">
          {/* The description of goaltac */}
          <div className="md:gap-12 flex flex-col">
            <div className="flex flex-col mb-2 md:text-left text-center sm:w-2/3 w-full mx-auto">
              <h1 className="mb-2 text-4xl font-bold tracking-tighter text-gray-900 md:text-5xl">
                <span>Build high</span>
                <br className="hidden md:block"></br>
                {' '}quality networks
              </h1>
              <br></br>
              <p className="text-xl mx-auto font-normal leading-relaxed text-gray-900 dark:text-gray-900 ">
                A gamified networking platform to grow and leverage an authentic network of people you met to discover and maintain new connections
              </p>
              <div className="flex flex-row mt-12 pt-12 md:mt-0 md:justify-left justify-center">
                <div className="min-w-[20rem]">
                    <BetaSignUp/>
                </div>
              </div>
            </div>
            
          </div>
          <div className="mx-auto md:pr-12">
              <Image src="/network_example.svg"
                width={600}
                height={600}
                className=""
                alt="Networking example"/>
          </div>
        </div>
      </div>

      <section className="text-gray-600 body-font">
        <div className="container px-5 w-full">
          <div className="flex flex-col md:flex-row mb-10 justify-center items-center border border-8 bg-gray-200 rounded-md p-6 md:gap-8">
            <h1 className="max-w-xs text-gray-900 text-center text-xl font-bold mb-3">
              Common difficulties young professionals experience with modern networking
            </h1>
            <ol className="number flex-grow max-w-md text-left gap-2 flex flex-col">
              <li className="text-gray-700">
                Awkward or intimidating reaching out to new/old connections
              </li>
              <li className="text-gray-700">
                Looking for people of interest in your extended network can take up a lot of time
              </li>
              <li className="text-gray-700">
                Manually keeping track and maintaining lasting professional relationships can be inefficient and takes up a lot of time 
              </li>
            </ol>
          </div>
          <div>
          <div className="mx-auto flex flex-wrap justify-center text-left md:gap-x-10">
            <div className="flex flex-col mb-10 items-center">
              <div className="flex-grow max-w-sm">
                <h2 className="text-black text-2xl title-font font-medium mb-3">
                  Easy Networking
                </h2>
                <p className="leading-relaxed text-lg">
                  Build new connections with the help of connections you already know to introduce you to a connection they know. Easily import existing contacts to track interactions manually (or invite them to make it a lot easier!)
                </p>
              </div>
            </div>
            <div className="flex flex-col mb-10 items-center">
              <div className="flex-grow max-w-sm">
                <h2 className="text-black text-2xl title-font font-medium mb-3">
                  Quality Relationships
                </h2>
                <p className="leading-relaxed text-lg">
                  Create a close-knit network limited to only people you have met. Network sizes are limited, so you need to be selective about who you want in your circle, and continuous interactions are needed to keep connected
                </p>
              </div>
            </div>
            <div className="flex flex-col mb-10 items-center">
              <div className="flex-grow max-w-sm">
                <h2 className="text-black text-2xl title-font font-medium mb-3">
                  Discover People to Meet
                </h2>
                <p className="leading-relaxed text-lg">
                  Upload your public resume and post hidden experiences to make you discoverable to people who want to meet you, and easily find people of interest within your extended network with our AI search querying. 
                </p>
              </div>
            </div>
            <div className="flex flex-col mb-10 items-center">
              <div className="flex-grow max-w-sm">
                <h2 className="text-black text-2xl title-font font-medium mb-3">
                  Fun and Engaging
                </h2>
                <p className="leading-relaxed text-lg">
                  A gamified networking application, crazy! The more time that passes that you have not interacted with someone in your network, the weaker their relationship score to you becomes. Eventually they will disappear from your network. Keep in touch!
                 </p>
              </div>
            </div>
            <div className="flex flex-col mb-10 items-center">
              <div className="flex-grow max-w-sm">
                <h2 className="text-black text-2xl title-font font-medium mb-3">
                  Visually Stunning
                </h2>
                <p className="leading-relaxed text-lg">
                  Truly understand the strength and value of your connections in a visual way that makes sense. We are doing everything with network graphs rather than viewing results through lists. More infromation below!
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      
      <Newsletter/>
    </section>
  );
}
