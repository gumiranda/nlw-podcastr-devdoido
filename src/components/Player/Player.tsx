import { usePlayer } from '@/domain/contexts';
import * as S from './styles';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { convertDurationToTimeString } from '@/utils/convertDurationToTimeString';
const Player = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [progress, setprogress] = useState(0);
  const {
    episodeList,
    setPlayingState,
    isPlaying,
    togglePlay,
    currentEpisodeIndex,
    playNext,
    playPrevious,
    hasNext,
    hasPrevious,
    isLooping,
    toggleLoop,
    isShuffleing,
    toggleShuffle,
    clearPlayerState
  } = usePlayer();
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
  const setupProgressListener = () => {
    if (audioRef && audioRef.current && audioRef.current.currentTime) {
      audioRef.current.currentTime = 0;
    }
    audioRef?.current?.addEventListener('timeupdate', (event) => {
      setprogress(Math.floor(audioRef?.current?.currentTime || 0));
    });
  };
  const handleSeek = (amount: number) => {
    if (audioRef && audioRef.current && audioRef.current.currentTime) {
      audioRef.current.currentTime = amount;
      setprogress(amount);
    }
  };
  const handleEpisodeEnded = () => {
    if (hasNext) {
      playNext();
    } else {
      clearPlayerState();
    }
  };
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
              {convertDurationToTimeString(progress ?? 0)}
            </S.FooterPlayerProgressTextIndicator>
            <S.FooterPlayerSlider />
            {episode ? (
              <Slider
                max={episode.duration}
                value={progress}
                onChange={handleSeek}
                trackStyle={{ backgroundColor: '#04d361' }}
                railStyle={{ backgroundColor: '#9f75ff' }}
                handleStyle={{ borderColor: '#04d361', borderWidth: 4 }}
              />
            ) : (
              <S.FooterPlayerEmptySlider />
            )}

            <S.FooterPlayerProgressTextIndicator>
              {convertDurationToTimeString(episode?.duration ?? 0)}
            </S.FooterPlayerProgressTextIndicator>
          </S.FooterPlayerProgress>
          {episode && (
            <audio
              ref={audioRef}
              src={episode.url}
              autoPlay
              loop={isLooping}
              onPlay={() => setPlayingState(true)}
              onPause={() => setPlayingState(false)}
              onLoadedMetadata={setupProgressListener}
              onEnded={handleEpisodeEnded}
            />
          )}
          <S.FooterPlayerButtons>
            <S.GenericButton
              onClick={toggleShuffle}
              isActive={isShuffleing}
              type="button"
              disabled={!episode || episodeList.length === 1}
            >
              <img src="/shuffle.svg" alt="Embaralhar" />
            </S.GenericButton>
            <S.GenericButton
              onClick={playPrevious}
              type="button"
              disabled={!episode || !hasPrevious}
            >
              <img src="/play-previous.svg" alt="Tocar anterior" />
            </S.GenericButton>
            <S.PlayButton onClick={togglePlay} type="button" disabled={!episode}>
              {isPlaying ? (
                <img src="/pause.svg" alt="Pausar" />
              ) : (
                <img src="/play.svg" alt="Tocar" />
              )}
            </S.PlayButton>

            <S.GenericButton
              onClick={playNext}
              type="button"
              disabled={!episode || !hasNext}
            >
              <img src="/play-next.svg" alt="Tocar próxima" />
            </S.GenericButton>
            <S.GenericButton
              onClick={toggleLoop}
              type="button"
              isActive={isLooping}
              disabled={!episode}
            >
              <img src="/repeat.svg" alt="Repetir" />
            </S.GenericButton>
          </S.FooterPlayerButtons>
        </S.FooterPlayer>
      </S.Wrapper>
    </S.BackgroundPlayer>
  );
};
export default Player;
