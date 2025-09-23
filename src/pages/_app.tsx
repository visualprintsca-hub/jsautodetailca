
import type { AppProps } from "next/app";
import Head from "next/head";
import Header from "@/components/header";
// import '@shopify/polaris/build/esm/styles.css';
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link href="https://api.fontshare.com/v2/css?f[]=nippo@200,300,400,500,700&display=swap" rel="stylesheet"/>
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@300,301,400,401,500,501,700,701,900,901&display=swap" rel="stylesheet"/>
      </Head>
   
        <Header/>
        <Component {...pageProps} />
      
    </>
  )
}
