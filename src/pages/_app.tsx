"use client"
import { type AppProps, type AppType } from "next/app";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import { ThemeProvider } from "~/components/theme-provider";
import { useState, type ReactElement, type ReactNode, useEffect } from "react";
import { type NextPage } from "next";
import {
  createPagesBrowserClient,
  type Session,
  type SupabaseClient,
} from "@supabase/auth-helpers-nextjs";
import { Toaster } from "../components/ui/toaster";
import { type Database } from "~/types/supabase";
import Script from "next/script";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { supabase } from "~/utils/supabaseClient";

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
    <>
    <Script strategy="lazyOnload"
      src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}/>

    <Script strategy="lazyOnload">
      {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
        page_path: window.location.pathname,
        });`}</Script>
    
    <SessionContextProvider
      supabaseClient={supabase}
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
    </SessionContextProvider></>
  );
};

export default api.withTRPC(MyApp);
