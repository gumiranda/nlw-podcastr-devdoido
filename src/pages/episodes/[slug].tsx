import { GetStaticProps, GetStaticPaths } from 'next';
import LayoutPodcast from 'components/LayoutPodcast';
import { format, parseISO } from 'date-fns';
import { useRouter } from 'next/router';
import api from 'services/api';
import ptBR from 'date-fns/locale/pt-BR';
import { Episode } from 'domain/entities';
import EpisodeDetails from 'components/EpisodeDetails';
type EpisodeDetailsProps = {
  episode: Episode;
};
import { convertDurationToTimeString } from 'utils/convertDurationToTimeString';
export default function Episodes({ episode }: EpisodeDetailsProps) {
  //bloco de codigo necessario se usar fallback:true
  // const router = useRouter();
  // if (router.isFallback) {
  //   return <p>Carregando</p>;
  // }
  return (
    <LayoutPodcast>
      <EpisodeDetails episode={episode} />
    </LayoutPodcast>
  );
}
export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await api.get('episodes', {
    params: {
      _limit: 2,
      _sort: 'published_at',
      _order: 'desc'
    }
  });
  const paths = data.map((episode: any) => {
    return {
      params: {
        slug: episode.id
      }
    };
  });
  return {
    paths, //: [{ params: { slug: 'a-importancia-da-contribuicao-em-open-source' } }],
    fallback: 'blocking' //incremental static generation //mostra alguma coisa somente depois do conteudo for carregado do server///
    //true //tenta pegar episodio pelo lado do client //incremental static generation
    // false //mostra 404 se nao achar episodio
  };
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
