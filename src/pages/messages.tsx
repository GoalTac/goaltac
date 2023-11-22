import { type ReactElement } from "react";
import { MainLayout } from "~/components/layouts/main-layout";

import { api } from "~/utils/api";

export default function HomePage() {
  const hello = api.post.hello.useQuery({ text: "from tRPC" });

  return <div className="flex justify-center gap-8 py-6">Messages</div>;
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
