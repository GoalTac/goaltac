import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { SignUpForm } from "~/components/sign-up-form";
import { SignUpSuccess } from "~/components/sign-up-success";

export default function AuthenticationPage() {
  const [ submitted, setSubmitted ] = useState<string>('')

  return (
    <section className="bg-[url('/bubble_background.svg')] dark:bg-gray-900">
      <div className="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
        <a
          href="/"
          className="mb-6 flex items-center text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <Image width={100} height={100} src="/icon_logo.png" alt="logo" />
        </a>
        <div className="w-full rounded-lg bg-white shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:max-w-md md:mt-0 xl:p-0">
          <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
            <h1 className="text-xl font-bold text-center leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl">
              Create your Account
            </h1>
            <p className="text-sm text-muted-foreground text-center">
              {"Enter your email below to create your account. Already have an account? "}
              <Link
                href="/login"
                className="underline underline-offset-4 hover:text-primary">
                Login here!
              </Link>
            </p>
            {submitted ? <SignUpSuccess submitted={submitted}/> : <SignUpForm setSubmitted={setSubmitted} />}
          </div>
        </div>
      </div>
    </section>
  );
}
