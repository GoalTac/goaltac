import Image from "next/image";
import Link from "next/link";

import { SignUpForm } from "~/components/sign-up-form";

export default function AuthenticationPage() {
  return (
    <>
      <div className="container relative h-[100vh] flex-col items-center justify-center bg-black/5 md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-[url('/Network.png')] blur-sm" />
          <div className="relative z-20 flex items-center text-5xl font-medium text-white/80">
            <Image
              src="/icon_logo.png"
              width={80}
              height={100}
              alt="GoalTac Logo"
            />
          </div>

          <div className="relative z-20 mt-auto text-black">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;Connecting through mutual connections has been easy!
                I&apos;ve been able to meet interesting people through my
                friends.&rdquo;
              </p>
              <footer className="text-sm">~ My Phung | CEO</footer>
            </blockquote>
          </div>
        </div>
        <div className="rounded-md bg-white p-10 lg:p-8">
          <div className="relative mx-auto flex w-full flex-col justify-center gap-2 sm:w-[350px]">
            <div className="mt-10 flex flex-col items-center space-y-2">
              <div className="absolute left-0 top-0">
                <Image
                  src="/name_logo.png"
                  width={100}
                  height={80}
                  alt="GoalTac Logo"
                />
              </div>
              <h1 className="text-2xl font-semibold tracking-tight text-black/70">
                Create an account
              </h1>
              <p className="text-sm text-muted-foreground">
                {
                  "Enter your email below to create your account. Already have an account? "
                }
                <Link
                  href="/login"
                  className="underline underline-offset-4 hover:text-primary"
                >
                  Login here!
                </Link>
              </p>
            </div>
            <SignUpForm />
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
