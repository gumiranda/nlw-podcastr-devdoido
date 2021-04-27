import * as S from './styles';
import { Episode } from '@/domain/entities';
import Image from 'next/image';
import Link from 'next/link';
import { usePlayer } from '@/domain/contexts';
interface IProps {
  allEpisodes: Episode[];
  episodeList: Episode[];
  title: string;
}
const AllEpisodesPodcast = ({
  allEpisodes = [],
  episodeList = [],
  title = 'Todos os episódios',
  ...props
}: IProps) => {
  const { playList } = usePlayer();

  return (
    <S.Wrapper>
      <h2>{title}</h2>
      <table cellSpacing={0}>
        <thead>
          <tr>
            <th></th>
            <th>Podcast</th>
            <th>Integrantes</th>
            <th>Data</th>
            <th>Duração</th>
          </tr>
        </thead>
        <tbody>
          {allEpisodes.map((episode, index) => {
            return (
              <tr key={episode.id}>
                <td style={{ width: 72 }}>
                  <Image
                    objectFit="cover"
                    width={192}
                    height={192}
                    src={episode.thumbnail}
                    alt={episode.title}
                  />
                </td>
                <td>
                  <Link href={`/episodes/${episode.id}`}>
                    <a>{episode.title}</a>
                  </Link>
                </td>
                <td>{episode.members}</td>
                <td style={{ width: 100 }}>{episode.publishedAt}</td>
                <td>{episode.durationAsString}</td>
                <td>
                  <button
                    type="button"
                    onClick={() =>
                      playList(
                        episodeList,
                        index + (episodeList.length - allEpisodes.length)
                      )
                    }
                  >
                    <img src="/play-green.svg" alt="Tocar episódio" />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </S.Wrapper>
  );
};
export default AllEpisodesPodcast;
