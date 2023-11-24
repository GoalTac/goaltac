import Link from "next/link";
import { type ReactElement } from "react";
import { cn } from "~/utils";

const NavLink = ({
  href,
  text,
  active,
  icon,
  isExpanded,
}: {
  href: string;
  text: string;
  active: boolean;
  icon: ReactElement;
  isExpanded: boolean;
}) => {
  return (
    <Link
      key={text}
      href={href}
      className={cn(
        "text-brand-black flex gap-2 rounded-md p-2 text-left text-sm hover:bg-foreground/50",
        {
          "text-foreground": active,
        },
      )}
    >
      <div
        className={cn("flex items-center", {
          "text-foreground": active && !isExpanded,
          "mr-2": isExpanded,
          "[&>svg]:stroke-2": active,
        })}
      >
        {icon}
      </div>
      <div
        className={cn("hidden truncate text-base", {
          block: isExpanded,
        })}
      >
        {text}
      </div>
    </Link>
  );
};

export default NavLink;
