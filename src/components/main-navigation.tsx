import { useEffect } from "react";
import { useRouter } from "next/router";
import { api } from "~/utils/api";
import NavLink from "./nav-link";
import { Avatar } from "./ui/avatar";
import {
  BellRing,
  ChevronLeft,
  ChevronRight,
  Cog,
  DollarSign,
  FileSpreadsheet,
  LayoutGrid,
  LogOut,
  MessageCircle,
  Search,
  Target,
} from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { cn } from "~/utils";
import { ThemeToggle } from "./theme-toggle";

import { useToast } from "./ui/use-toast";
import { useSession } from "~/utils/sessionProvider";

const navItems = [
  {
    text: "Dashboard",
    href: "/dashboard",
    icon: <LayoutGrid className="h-4 w-4" />,
  },
  {
    text: "Discover",
    href: "/discover",
    icon: <Search className="h-4 w-4" />,
  },
  {
    text: "Notifications",
    href: "/notifications",
    icon: <BellRing className="h-4 w-4" />,
  },
  {
    text: "Messages",
    href: "/messages",
    icon: <MessageCircle className="h-4 w-4" />,
  },
  {
    text: "Export",
    href: "/export",
    icon: <FileSpreadsheet className="h-4 w-4" />,
  },
  {
    text: "Pricing",
    href: "/pricing",
    icon: <DollarSign className="h-4 w-4" />,
  },
];

const CloseButton = ({
  toggleExpanded,
  isExpanded,
}: {
  toggleExpanded: () => void;
  isExpanded: boolean;
}) => {
  return (
    <div className="absolute -right-2 top-[33px] z-20 flex h-5 w-5 items-center justify-center rounded-md bg-slate-200 text-brand-black">
      <button onClick={toggleExpanded}>
        {isExpanded ? (
          <ChevronLeft strokeWidth={1} />
        ) : (
          <ChevronRight strokeWidth={1} />
        )}
      </button>
    </div>
  );
};

export function MainNavigation({
  isExpanded,
  toggleExpanded,
}: {
  isExpanded: boolean;
  toggleExpanded: () => void;
}) {
  const { pathname, push } = useRouter();
  const { session } = useSession();
  const { toast } = useToast();
  const router = useRouter();
  const signOutMutation = api.auth.signOut.useMutation({
    onSuccess: () => {
      toast({
        duration: 3000,
        variant: "success",
        description: "Logging out now...",
      });
      void router.push("/");
    },
    onError: (error) =>
      toast({
        duration: 6000,
        variant: "destructive",
        description: error.message,
      }),
  });
  //removed temporarily so I can work with dashboard
/*
  useEffect(() => {
    if (!session) {
      void push("/");
    }
  }, [session, push]);

  if (!session) return <>loading...</>;*/

  return (
    <div
      className={cn(
        "fixed z-20 flex hidden h-screen flex-col bg-white p-3 pt-8 shadow-md md:block",
        {
          "w-56": isExpanded,
          "w-16": !isExpanded,
        },
      )}
    >
      <CloseButton isExpanded={isExpanded} toggleExpanded={toggleExpanded} />

      <div className="flex flex-col space-y-6">
        <Link
          href={"/dashboard"}
          className={cn("flex w-fit items-center gap-2", {
            "justify-center": !isExpanded,
          })}
        >
          <Target />
          <h4
            className={cn("hidden truncate text-xl font-medium", {
              block: isExpanded,
            })}
          >
            GoalTac
          </h4>
        </Link>
        <div
          className={cn("flex flex-col gap-1", {
            "items-center": !isExpanded,
          })}
        >
          {navItems.map((item) => (
            <NavLink
              isExpanded={isExpanded}
              key={item.href}
              href={item.href}
              text={item.text}
              icon={item.icon}
              active={item.href.includes(pathname)}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-0 text-brand-black">
        <Avatar />
        <ThemeToggle />
        <Button
          variant={"ghost"}
          className={cn("flex w-fit items-center gap-2", {
            "justify-center": !isExpanded,
          })}
        >
          <Cog className="h-4 w-4" />{" "}
          <span
            className={cn("hidden truncate", {
              block: isExpanded,
            })}
          >
            Settings
          </span>
        </Button>
        <Button
          onClick={() => {
            signOutMutation.mutate();
          }}
          variant={"ghost"}
          className={cn("flex w-fit items-center gap-2 text-red-500", {
            "justify-center": !isExpanded,
          })}
        >
          <LogOut className="h-4 w-4" />{" "}
          <span
            className={cn("hidden truncate", {
              block: isExpanded,
            })}
          >
            Log out
          </span>
        </Button>
      </div>
    </div>
  );
}
