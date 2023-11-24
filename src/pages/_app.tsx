import { type AppProps, type AppType } from "next/app";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import { ThemeProvider } from "~/components/theme-provider";
import { useState, type ReactElement, type ReactNode } from "react";
import { type NextPage } from "next";
import {
  type Session,
  createPagesBrowserClient,
  type SupabaseClient,
} from "@supabase/auth-helpers-nextjs";
import { Toaster } from "../components/ui/toaster";
import { type Database } from "~/types/supabase";
import {  SessionContextProvider } from "@supabase/auth-helpers-react";
import { createBrowserClient } from "@supabase/ssr";

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

  const [supabaseClient] = useState(() => createPagesBrowserClient());

  const test = api.auth.getSession.useQuery({});

  // if (isLoading) return <>l</>;

  console.log("session", test);

  console.log("a", supabaseClient);

  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
      >
        {getLayout(<Component {...pageProps} />)}
        <Toaster />
      </ThemeProvider>
    </SessionContextProvider>
  );
};

export default api.withTRPC(MyApp);
