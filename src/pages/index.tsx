import Link from "next/link";
import Image from "next/image";

import { api } from "~/utils/api";

export default function Landing() {
  const hello = api.post.hello.useQuery({ text: "from tRPC" });

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[url('/bubble_background.svg')]">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight text-black sm:text-[5rem]">
          <Image
            src="/name_logo.png"
            width={400}
            height={400}
            className="h-auto w-auto"
            alt="GoalTac Logo"
          />
        </h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-black/5 p-4 text-center text-black hover:bg-black/10"
            href="/login"
          >
            <h3 className="text-2xl font-bold">Login</h3>
            <div className="text-lg">
              Log in to explore your connections and meet people in-person
            </div>
          </Link>
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-black/5 p-4 text-center text-black hover:bg-black/10"
            href="/signup"
          >
            <h3 className="text-2xl font-bold">Signup</h3>
            <div className="text-lg">
              Are you interested in building your network meaingfully? Signup
              here!
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
