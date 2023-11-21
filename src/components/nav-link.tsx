import Link from "next/link";
import { cn } from "~/utils";

const NavLink = ({
  href,
  text,
  active,
}: {
  href: string;
  text: string;
  active: boolean;
}) => {
  return (
    <Link
      key={text}
      href={href}
      className={cn(
        "relative whitespace-nowrap py-3 text-sm font-medium text-muted-foreground",
        {
          "text-foreground": active,
        },
      )}
    >
      <div
        className={cn({
          "before:absolute before:bottom-0 before:h-[1px] before:w-full before:bg-foreground":
            active,
        })}
      />
      {text}
    </Link>
  );
};

export default NavLink;
