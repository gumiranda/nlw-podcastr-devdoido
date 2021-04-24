import * as S from './styles';
import { Episode } from 'domain/entities';
import Image from 'next/image';
import Link from 'next/link';

interface IProps {
  latestEpisodes: Episode[];
  title: string;
}
const LatestEpisodesPodcast = ({
  latestEpisodes = [],
  title = 'Últimos lançamentos'
}: IProps) => (
  <S.Wrapper>
    <h2>{title}</h2>
    <ul>
      {latestEpisodes.map((episode) => {
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
            <button type="button">
              <img src="/play-green.svg" alt="Tocar episódio" />
            </button>
          </li>
        );
      })}
    </ul>
  </S.Wrapper>
);

export default LatestEpisodesPodcast;
