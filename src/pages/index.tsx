import LayoutPodcast from 'components/LayoutPodcast';
import { GetStaticProps, GetServerSideProps } from 'next';
import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import api from 'services/api';
type HomeProps = {
  episodes: Array<any>;
};
export default function HomePodcast({ episodes }: HomeProps) {
  return (
    <LayoutPodcast>
      <div>a</div>
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
      url: episode.file.url
    };
  });
  return {
    props: {
      episodes
    },
    revalidate: 60 * 60 * 8 //recarrega de 8 em 8 horas
  };
};
