import { MainNavigation } from "../main-navigation";
import MainHeader from "../main-header";

interface LayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: LayoutProps) {
  return (
    <>
      <MainHeader />
      <MainNavigation />
      <main className="pb-6">{children}</main>
    </>
  );
}
