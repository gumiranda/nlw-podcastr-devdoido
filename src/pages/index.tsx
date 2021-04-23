import LayoutPodcast from 'components/LayoutPodcast';
import { GetStaticProps, GetServerSideProps } from 'next';
import api from 'services/api';
type HomeProps = {
  episodes: Array<any>;
};
export default function HomePodcast({ episodes }: HomeProps) {
  return (
    <LayoutPodcast>
      <div>oi</div>
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
  return {
    props: {
      episodes: data
    },
    revalidate: 60 * 60 * 8 //recarrega de 8 em 8 horas
  };
};
