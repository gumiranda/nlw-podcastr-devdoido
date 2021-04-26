import { PlayerContext } from '@/domain/contexts';
import * as S from './styles';
import { useContext } from 'react';
import Image from 'next/image';
import Episodes from '@/pages/episodes/[slug]';
const Player = () => {
  const { episodeList, currentEpisodeIndex } = useContext(PlayerContext);
  const episode = episodeList[currentEpisodeIndex];
  //episodeList && currentEpisodeIndex
  //?
  //  : { title: 'oi' };
  return (
    <S.BackgroundPlayer>
      <S.Wrapper>
        <S.HeaderPlayer>
          <img src="/playing.svg" alt="Tocando agora" />
          <S.HeaderPlayerText>Tocando agora {episode?.title}</S.HeaderPlayerText>
        </S.HeaderPlayer>
        {episode ? (
          <S.CurrentEpisode>
            <Image width={592} height={592} src={episode.thumbnail} objectFit="cover" />
            <strong>{episode.title}</strong>
            <span>{episode.members}</span>
          </S.CurrentEpisode>
        ) : (
          <S.EmptyPlayer>
            <strong>Selecione um podcast para ouvir</strong>
          </S.EmptyPlayer>
        )}

        <S.FooterPlayer empty={!episode ? true : false}>
          <S.FooterPlayerProgress>
            <S.FooterPlayerProgressTextIndicator>
              00:00
            </S.FooterPlayerProgressTextIndicator>
            <S.FooterPlayerSlider />
            <S.FooterPlayerEmptySlider />
            <S.FooterPlayerProgressTextIndicator>
              00:00
            </S.FooterPlayerProgressTextIndicator>
          </S.FooterPlayerProgress>
          <S.FooterPlayerButtons>
            <S.GenericButton type="button">
              <img src="/shuffle.svg" alt="Embaralhar" />
            </S.GenericButton>
            <S.GenericButton type="button">
              <img src="/play-previous.svg" alt="Tocar anterior" />
            </S.GenericButton>
            <S.PlayButton type="button">
              <img src="/play.svg" alt="Tocar" />
            </S.PlayButton>
            <S.GenericButton type="button">
              <img src="/play-next.svg" alt="Tocar próxima" />
            </S.GenericButton>
            <S.GenericButton type="button">
              <img src="/repeat.svg" alt="Repetir" />
            </S.GenericButton>
          </S.FooterPlayerButtons>
        </S.FooterPlayer>
      </S.Wrapper>
    </S.BackgroundPlayer>
  );
};
export default Player;
