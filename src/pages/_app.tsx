/* eslint-disable @typescript-eslint/no-var-requires */
import { AppProps } from 'next/app';
import HeaderPodcast from 'components/HeaderPodcast';
import Head from 'next/head';
import GlobalStyles from 'styles/global';
import { PlayerContext } from 'domain/contexts';
import { useState } from 'react';
import { Episode } from 'domain/entities';

if (process.env.NODE_ENV === 'development') {
  if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
    require('../mocks');
  }
  //process.setMaxListeners(800);
}
function App({ Component, pageProps }: AppProps) {
  const [episodeList, setEpisodeList] = useState<Episode[]>([]);
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0);
  const play = (episode: Episode) => {
    setEpisodeList([episode]);
    setCurrentEpisodeIndex(0);
  };
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
      <PlayerContext.Provider value={{ episodeList, currentEpisodeIndex, play }}>
        <HeaderPodcast />
        <Component {...pageProps} />
      </PlayerContext.Provider>
    </>
  );
}

export default App;
