/* eslint-disable @typescript-eslint/no-var-requires */
import { AppProps } from 'next/app';
import HeaderPodcast from 'components/HeaderPodcast';
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

        <meta
          name="description"
          content="O portal do DevDoido ensina NodeJs e React Native"
        />
      </Head>
      <GlobalStyles />
      <HeaderPodcast />
      <Component {...pageProps} />
    </>
  );
}

export default App;
