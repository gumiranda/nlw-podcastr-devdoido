/* eslint-disable @typescript-eslint/no-var-requires */
import { AppProps } from 'next/app';
import Head from 'next/head';
import GlobalStyles from 'styles/global';
if (process.env.NODE_ENV === 'development') {
  if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
    require('../mocks');
  }
}
function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>DevDoido</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <meta
          name="description"
          content="O portal do DevDoido ensina NodeJs e React Native"
        />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default App;
