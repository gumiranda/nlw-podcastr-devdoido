/* eslint-disable @typescript-eslint/no-var-requires */
import { AppProps } from 'next/app';
import HeaderPodcast from 'components/HeaderPodcast';
import Head from 'next/head';
import GlobalStyles from 'styles/global';
import { PlayerContextProvider } from 'domain/contexts';

if (process.env.NODE_ENV === 'development') {
  if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
    require('../mocks');
  }
  //process.setMaxListeners(800);
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
      <PlayerContextProvider>
        <HeaderPodcast />
        <Component {...pageProps} />
      </PlayerContextProvider>
    </>
  );
}

export default App;
