
import type { AppProps } from "next/app";
import Head from "next/head";
import Header from "@/components/header";
import {AppProvider} from '@shopify/polaris';
import '@shopify/polaris/build/esm/styles.css';
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link href="https://api.fontshare.com/v2/css?f[]=nippo@200,300,400,500,700&display=swap" rel="stylesheet"/>
      </Head>
      <AppProvider i18n={{}}>
        <Header/>
        <Component {...pageProps} />
      </AppProvider>
    </>
  )
}
