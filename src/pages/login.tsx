'use client'

import Image from "next/image";
import { type ReactElement } from "react";
import { MainLayout } from "~/components/layouts/main-layout";
import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import { UserAuthForm } from "../components/SignInForm"
import { api } from "~/utils/api";

export default function Login() {
  return <section className="bg-[url('/bubble_background.svg')] dark:bg-gray-900">
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            <Image width={100} height={100} src="/icon_logo.png" alt="logo"/>
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Sign in to your account
                </h1>
                <UserAuthForm/>
            </div>
        </div>
    </div>
  </section>
}
