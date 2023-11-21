import { useRouter } from "next/router";
import { type ReactElement } from "react";
import { MainLayout } from "~/components/layouts/main-layout";

export default function HomePage() {
  const { query } = useRouter()

  return <div className="flex gap-8 justify-center py-6">User id: {query.id}</div>;
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
