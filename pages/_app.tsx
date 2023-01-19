import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styles/global-style';
import { theme } from '../styles/theme';
import { useRouter } from 'next/router';
import Header from '../components/Header';
function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  console.log(router.pathname);
  let headerPosition = '';
  if (router.pathname === '/') {
    headerPosition = 'static';
  } else {
    headerPosition = 'fixed';
  }
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Return</title>
        <link rel="icon" href="logo-only-_1_.svg" />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header headerPosition={headerPosition} />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
