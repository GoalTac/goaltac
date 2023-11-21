import * as React from "react";
import { useRouter } from "next/router";
import { GanttChartIcon } from "lucide-react";
import { useInView } from "react-intersection-observer";

import { UserNav } from "./user-nav";
import NavLink from "./nav-link";
import { cn } from "~/utils";

const navItems = [
  {
    text: "Home",
    href: "/",
    link: "/",
  },
  {
    text: "Users",
    href: "/user/123",
    link: "/user/[id]",
  },
];

export function MainNavigation() {
  const pathname = useRouter().pathname;

  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "0px 0px -100%",
  });

  return (
    <div
      ref={ref}
      className={cn(
        "sticky top-0 z-40 flex items-center justify-between border-b border-b-border bg-background px-4 transition-shadow print:hidden",
        {
          "border-none shadow-md": inView,
        },
      )}
    >
      <nav className="flex w-full items-center space-x-4 overflow-x-auto overflow-y-hidden">
        {inView ? <GanttChartIcon className="h-5 w-5" /> : null}
        {navItems.map((item) => (
          <NavLink
            key={item.href}
            href={item.href}
            text={item.text}
            active={item.link === pathname}
          />
        ))}
      </nav>

      <div className="hidden sm:block">{inView ? <UserNav /> : null}</div>
    </div>
  );
}
