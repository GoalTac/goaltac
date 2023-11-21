import Link from "next/link";

import { UserNav } from "./user-nav";
import { Target } from "lucide-react";
import Head from "next/head";
import { ThemeToggle } from "./theme-toggle";

const MainHeader = () => {
  return (
    <>
      <Head>
        <title>GoalTac</title>
        <meta name="description" content="Goal Managing app." />
        <link rel="icon" href="/file-signature.ico" />
      </Head>
      <header className="z-40 w-full print:hidden">
        <div className="flex h-16 items-center space-x-4 px-4 sm:justify-between sm:space-x-0">
          <div className="flex w-full items-center justify-between gap-6 md:gap-10">
            <Link href="/" className="items-center space-x-2 md:flex">
              <Target className="h-5 w-5" absoluteStrokeWidth />
              <span className="hidden font-medium sm:inline-block">
                GoalTac
              </span>
            </Link>

            <div className="flex flex-1 items-center justify-end space-x-4">
              <nav className="flex items-center gap-4">
                <UserNav />
              </nav>
            </div>
            <div>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default MainHeader;
