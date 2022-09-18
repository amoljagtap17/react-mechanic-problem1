import type { AppProps } from "next/app";
import Head from "next/head";
import CssBaseline from "@mui/material/CssBaseline";

import { Container, Stack } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { CacheProvider, EmotionCache } from "@emotion/react";

import { SessionProvider } from "next-auth/react";

import { createEmotionCache, theme } from "app/mui";
import { Header, Footer } from "components/sections";

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function MyApp(props: MyAppProps) {
  const {
    Component,
    emotionCache = clientSideEmotionCache,
    // @ts-ignore
    pageProps: { session, ...pageProps },
  } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>SAT Demo</title>
        <meta name="description" content="Prototype Application." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ThemeProvider theme={theme}>
        <CssBaseline />

        <SessionProvider session={session}>
          <Stack sx={{ minHeight: "100vh" }}>
            <Header />
            <Container maxWidth="lg" sx={{ flexGrow: 1, position: "relative" }}>
              <Component {...pageProps} />
            </Container>
            <Footer />
          </Stack>
        </SessionProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
