import * as S from './styles';
import { Episode } from '@/domain/entities';
import Image from 'next/image';
import Link from 'next/link';
import { usePlayer } from '@/domain/contexts';
interface IProps {
  latestEpisodes: Episode[];
  episodeList: Episode[];
  title: string;
}
const LatestEpisodesPodcast = ({
  latestEpisodes = [],
  episodeList = [],
  title = 'Últimos lançamentos'
}: IProps) => {
  const { playList } = usePlayer();

  return (
    <S.Wrapper>
      <h2>{title}</h2>
      <ul>
        {latestEpisodes.map((episode, index) => {
          return (
            <li key={episode.id}>
              <Image
                objectFit="cover"
                width={192}
                height={192}
                src={episode.thumbnail}
                alt={episode.title}
              />
              <S.EpisodeDetails>
                <Link href={`/episodes/${episode.id}`}>
                  <a>{episode.title}</a>
                </Link>
                <p>{episode.members}</p>
                <span>{episode.publishedAt}</span>
                <span>{episode.durationAsString}</span>
              </S.EpisodeDetails>
              <button type="button" onClick={() => playList(episodeList, index)}>
                <img src="/play-green.svg" alt="Tocar episódio" />
              </button>
            </li>
          );
        })}
      </ul>
    </S.Wrapper>
  );
};
export default LatestEpisodesPodcast;
