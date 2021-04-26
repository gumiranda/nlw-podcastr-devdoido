import { PlayerContext } from '@/domain/contexts';
import * as S from './styles';
import { useContext, useEffect, useRef } from 'react';
import Image from 'next/image';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
const Player = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const {
    episodeList,
    setPlayingState,
    isPlaying,
    togglePlay,
    currentEpisodeIndex,
    playNext,
    playPrevious
  } = useContext(PlayerContext);
  const episode = episodeList[currentEpisodeIndex];
  useEffect(() => {
    if (!audioRef.current) {
      return;
    }
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);
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
            <Image width={120} height={120} src={episode.thumbnail} objectFit="cover" />
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
            {episode ? (
              <Slider
                trackStyle={{ backgroundColor: '#04d361' }}
                railStyle={{ backgroundColor: '#9f75ff' }}
                handleStyle={{ borderColor: '#04d361', borderWidth: 4 }}
              />
            ) : (
              <S.FooterPlayerEmptySlider />
            )}

            <S.FooterPlayerProgressTextIndicator>
              00:00
            </S.FooterPlayerProgressTextIndicator>
          </S.FooterPlayerProgress>
          {episode && (
            <audio
              ref={audioRef}
              src={episode.url}
              autoPlay
              onPlay={() => setPlayingState(true)}
              onPause={() => setPlayingState(false)}
            />
          )}
          <S.FooterPlayerButtons>
            <S.GenericButton type="button" disabled={!episode}>
              <img src="/shuffle.svg" alt="Embaralhar" />
            </S.GenericButton>
            <S.GenericButton onClick={playPrevious} type="button" disabled={!episode}>
              <img src="/play-previous.svg" alt="Tocar anterior" />
            </S.GenericButton>
            <S.PlayButton onClick={togglePlay} type="button" disabled={!episode}>
              {isPlaying ? (
                <img src="/pause.svg" alt="Pausar" />
              ) : (
                <img src="/play.svg" alt="Tocar" />
              )}
            </S.PlayButton>

            <S.GenericButton onClick={playNext} type="button" disabled={!episode}>
              <img src="/play-next.svg" alt="Tocar próxima" />
            </S.GenericButton>
            <S.GenericButton type="button" disabled={!episode}>
              <img src="/repeat.svg" alt="Repetir" />
            </S.GenericButton>
          </S.FooterPlayerButtons>
        </S.FooterPlayer>
      </S.Wrapper>
    </S.BackgroundPlayer>
  );
};
export default Player;
