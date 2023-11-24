"use client";

import Image from "next/image";
import { SignInForm } from "~/components/sign-in-form";

export default function Login() {
  return (
    <section className="bg-[url('/bubble_background.svg')] dark:bg-gray-900">
      <div className="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
        <a
          href="#"
          className="mb-6 flex items-center text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <Image width={100} height={100} src="/icon_logo.png" alt="logo" />
        </a>
        <div className="w-full rounded-lg bg-white shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:max-w-md md:mt-0 xl:p-0">
          <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl">
              Sign in to your account
            </h1>
            <SignInForm />
          </div>
        </div>
      </div>
    </section>
  );
}
