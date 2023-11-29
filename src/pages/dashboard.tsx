import { type ReactElement } from "react";
import { MainLayout } from "~/components/layouts/main-layout";

export default function DashboardPage() {
  return (
    <div className="flex h-screen w-full justify-center gap-8 py-6">
      Dashboard
    </div>
  );
}

DashboardPage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
