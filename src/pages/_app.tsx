import { ChakraProvider } from "@chakra-ui/react";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Web3ReactProvider } from "@web3-react/core";
import "@fontsource/lexend";

import defaultSeoConfig from "../../next-seo.config";
import { getLibrary } from "utils";
import Layout from "components/layout";
import customTheme from "styles/customTheme";
import "styles/globals.css";

function MyApp({
  Component,
  pageProps,
}: AppProps) {
  return (
      <ChakraProvider theme={customTheme}>
        <Head>
          <meta name="viewport" content="minimum-scale=1, maximum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover" />
        </Head>
        <DefaultSeo {...defaultSeoConfig} />
        <Web3ReactProvider getLibrary={getLibrary}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Web3ReactProvider>
      </ChakraProvider>
  );
}

export default MyApp;
