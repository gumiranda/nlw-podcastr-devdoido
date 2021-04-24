import { GetStaticProps, GetStaticPaths } from 'next';
import LayoutPodcast from 'components/LayoutPodcast';
import { format, parseISO } from 'date-fns';
import api from 'services/api';
import ptBR from 'date-fns/locale/pt-BR';
import { Episode } from 'domain/entities';
import EpisodeDetails from 'components/EpisodeDetails';
type EpisodeDetailsProps = {
  episode: Episode;
};
import { convertDurationToTimeString } from 'utils/convertDurationToTimeString';
export default function Episodes({ episode }: EpisodeDetailsProps) {
  return (
    <LayoutPodcast>
      <EpisodeDetails episode={episode} />
    </LayoutPodcast>
  );
}
export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: [], fallback: 'blocking' };
};
export const getStaticProps: GetStaticProps = async (ctx) => {
  const { slug }: any = ctx.params;
  const { data } = await api.get(`episodes/${slug}`);
  const episode = {
    ...data,
    publishedAt: format(parseISO(data.published_at), 'd MMM yy', { locale: ptBR }),
    duration: Number(data.file.duration),
    durationAsString: convertDurationToTimeString(Number(data.file.duration)),
    url: data.file.url
  };
  return {
    props: { episode },
    revalidate: 60 * 60 * 24
  };
};
