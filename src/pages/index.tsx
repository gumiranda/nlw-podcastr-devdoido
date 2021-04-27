import LayoutPodcast from 'components/LayoutPodcast';
import HomepagePodcast from 'components/HomepagePodcast';
import AllEpisodesPodcast from 'components/AllEpisodesPodcast';
import LatestEpisodesPodcast from 'components/LatestEpisodesPodcast';
import { GetStaticProps, GetServerSideProps } from 'next';
import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import api from 'services/api';
import { convertDurationToTimeString } from 'utils/convertDurationToTimeString';
import { Episode } from 'domain/entities';
type HomeProps = {
  allEpisodes: Array<Episode>;
  latestEpisodes: Array<Episode>;
};
export default function HomePodcast({ allEpisodes, latestEpisodes }: HomeProps) {
  const episodeList = [...latestEpisodes, ...allEpisodes];
  return (
    <LayoutPodcast>
      <HomepagePodcast>
        <LatestEpisodesPodcast
          title={`Últimos Lançamentos  ${0}`}
          episodeList={episodeList}
          latestEpisodes={latestEpisodes}
        />
        <AllEpisodesPodcast
          title={'Todos episódios'}
          episodeList={episodeList}
          allEpisodes={allEpisodes}
        />
      </HomepagePodcast>
    </LayoutPodcast>
  );
}
// WITH SSR
// export const getServerSideProps: GetServerSideProps = async () => {
//   const response = await fetch('http://localhost:3333/episodes');
//   const data = await response.json();
//   return {
//     props: {
//       episodes: data
//     }
//   };
// };

//WITH SSG
export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get('episodes', {
    params: {
      _limit: 12,
      _sort: 'published_at',
      _order: 'desc'
    }
  });
  const episodes = data.map((episode: any) => {
    return {
      ...episode,
      publishedAt: format(parseISO(episode.published_at), 'd MMM yy', { locale: ptBR }),
      duration: Number(episode.file.duration),
      durationAsString: convertDurationToTimeString(Number(episode.file.duration)),
      url: episode.file.url
    };
  });
  const allEpisodes = episodes.slice(2, episodes.length);
  const latestEpisodes = episodes.slice(0, 2);
  return {
    props: {
      allEpisodes,
      latestEpisodes
    },
    revalidate: 60 * 60 * 8 //recarrega de 8 em 8 horas
  };
};
