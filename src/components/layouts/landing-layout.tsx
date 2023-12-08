import { MainNavigation } from "../main-navigation";
import MainHeader from "../main-header";
import { useToggle } from "usehooks-ts";
import { cn } from "~/utils";
import Head from "next/head";
import Header from "../landingPage/header";
import Footer from "../landingPage/footer";

interface LayoutProps {
  children: React.ReactNode;
}

export function LandingLayout({ children }: LayoutProps) {
  const [isExpanded, toggleExpanded] = useToggle(true);

  return (<div className="w-full">
      {/* Header */}
      <Header/>
      <div className="container flex-col gap-12 px-4 py-16 md:pt-32 pt-24">
        {children}
      </div>
      <div className="bg-gray-100">
        <div className="container">
          <Footer/>
        </div>
      </div>
    </div>);
}
