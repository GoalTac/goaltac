import { type AppProps, type AppType } from "next/app";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import { ThemeProvider } from "~/components/theme-provider";
import { type ReactElement, type ReactNode } from "react";
import { type NextPage } from "next";
import {
  type Session,
  type SupabaseClient,
} from "@supabase/auth-helpers-nextjs";
import { Toaster } from "../components/ui/toaster";
import { type Database } from "~/types/supabase";
import { SessionProvider } from "~/utils/sessionProvider";

export type TypedSupabaseClient = SupabaseClient<Database>;

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps<{
  initialSession: Session | null | undefined;
}> & {
  Component: NextPageWithLayout;
};

const MyApp: AppType<{ initialSession: Session | null | undefined }> = ({
  Component,
  pageProps,
}: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <SessionProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
      >
        {getLayout(<Component {...pageProps} />)}
        <Toaster />
      </ThemeProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
