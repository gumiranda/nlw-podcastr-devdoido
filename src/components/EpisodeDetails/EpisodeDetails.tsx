import * as S from './styles';
import Image from 'next/image';
import Link from 'next/link';
import { PlayerContext } from '@/domain/contexts';
import { useContext } from 'react';

interface IProps {
  episode: any;
}
const EpisodeDetails = ({ episode = {}, ...props }: IProps) => {
  const { play } = useContext(PlayerContext);

  return (
    <S.Wrapper>
      <S.ThumbnailContainer>
        <Link href="\">
          <button type="button">
            <img src="/arrow-left.svg" alt="Voltar" />
          </button>
        </Link>
        <Image width={700} height={220} src={episode.thumbnail} objectFit="cover" />
        <button type="button" onClick={() => play(episode)}>
          <img src="/play.svg" alt="Tocar episódio" />
        </button>
      </S.ThumbnailContainer>
      <header>
        <h1>{episode.title}</h1>
        <span>{episode.members}</span>
        <span>{episode.publishedAt}</span>
        <span>{episode.durationAsString}</span>
      </header>
      <S.DescriptionContainer dangerouslySetInnerHTML={{ __html: episode.description }} />
    </S.Wrapper>
  );
};
export default EpisodeDetails;
