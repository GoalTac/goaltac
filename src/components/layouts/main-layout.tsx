import { MainNavigation } from "../main-navigation";
import MainHeader from "../main-header";
import { useToggle } from "usehooks-ts";
import { cn } from "~/utils";

interface LayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: LayoutProps) {
  const [isExpanded, toggleExpanded] = useToggle(true);

  return (
    <>
      <MainHeader />
      <MainNavigation isExpanded={isExpanded} toggleExpanded={toggleExpanded} />
      <main
        className={cn({
          "sm:pl-56": isExpanded,
          "sm:pl-16": !isExpanded,
        })}
      >
        <div className="container">{children}</div>
      </main>
    </>
  );
}
