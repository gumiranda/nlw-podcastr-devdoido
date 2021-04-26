import { createContext, useContext, ReactNode, useState } from 'react';
import { Episode } from 'domain/entities';

// export type Episode = {
//   title: string;
//   members: string;
//   thumbnail: string;
//   duration: string;
//   url: string;
// };
type PlayerContextData = {
  episodeList: Episode[];
  currentEpisodeIndex: number;
  isPlaying: boolean;
  isLooping: boolean;
  isShuffleing: boolean;
  play: (episode: Episode) => void;
  setPlayingState: (state: boolean) => void;
  playList: (list: Episode[], index: number) => void;
  togglePlay: () => void;
  toggleLoop: () => void;
  toggleShuffle: () => void;
  playNext: () => void;
  playPrevious: () => void;
  clearPlayerState: () => void;
  hasPrevious: boolean;
  hasNext: boolean;
};
export const PlayerContext = createContext({} as PlayerContextData);
interface IProps {
  children: ReactNode;
}
export const PlayerContextProvider = ({ children, ...props }: IProps) => {
  const [episodeList, setEpisodeList] = useState<Episode[]>([]);
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0);
  const [isPlaying, setisPlaying] = useState(false);
  const [isLooping, setisLooping] = useState(false);
  const [isShuffleing, setisShuffleing] = useState(false);
  const play = (episode: Episode) => {
    setEpisodeList([episode]);
    setCurrentEpisodeIndex(0);
    setisPlaying(true);
  };
  const togglePlay = () => {
    setisPlaying(!isPlaying);
  };
  const toggleLoop = () => {
    setisLooping(!isLooping);
  };
  const toggleShuffle = () => {
    setisShuffleing(!isShuffleing);
  };
  const playList = (list: Episode[], index: number) => {
    setEpisodeList(list);
    setCurrentEpisodeIndex(index);
    setisPlaying(true);
  };
  const setPlayingState = (state: boolean) => {
    setisPlaying(state);
  };
  const clearPlayerState = () => {
    setEpisodeList([]);
    setCurrentEpisodeIndex(0);
  };
  const hasPrevious = currentEpisodeIndex > 0;
  const hasNext = isShuffleing || currentEpisodeIndex + 1 < episodeList.length;
  const playNext = () => {
    const nextEpisodeIndex = currentEpisodeIndex + 1;
    if (isShuffleing) {
      const nextRandomEpisodeIndex = Math.floor(Math.random() * episodeList.length);
      setCurrentEpisodeIndex(nextRandomEpisodeIndex);
    } else if (hasNext) {
      setCurrentEpisodeIndex(nextEpisodeIndex);
    }
  };
  const playPrevious = () => {
    if (hasPrevious) {
      const nextEpisodeIndex = currentEpisodeIndex - 1;
      setCurrentEpisodeIndex(nextEpisodeIndex);
    }
  };
  return (
    <PlayerContext.Provider
      value={{
        episodeList,
        currentEpisodeIndex,
        play,
        isPlaying,
        togglePlay,
        setPlayingState,
        playPrevious,
        playList,
        playNext,
        hasPrevious,
        hasNext,
        toggleLoop,
        isLooping,
        toggleShuffle,
        isShuffleing,
        clearPlayerState
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};
export const usePlayer = () => {
  return useContext(PlayerContext);
};
