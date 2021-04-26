import { createContext, ReactNode, useState } from 'react';
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
  play: (episode: Episode) => void;
  setPlayingState: (state: boolean) => void;
  playList: (list: Episode[], index: number) => void;
  togglePlay: () => void;
  playNext: () => void;
  playPrevious: () => void;
};
export const PlayerContext = createContext({} as PlayerContextData);
interface IProps {
  children: ReactNode;
}
export const PlayerContextProvider = ({ children, ...props }: IProps) => {
  const [episodeList, setEpisodeList] = useState<Episode[]>([]);
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0);
  const [isPlaying, setisPlaying] = useState(false);
  const play = (episode: Episode) => {
    setEpisodeList([episode]);
    setCurrentEpisodeIndex(0);
    setisPlaying(true);
  };
  const togglePlay = () => {
    setisPlaying(!isPlaying);
  };
  const playList = (list: Episode[], index: number) => {
    setEpisodeList(list);
    setCurrentEpisodeIndex(index);
    setisPlaying(true);
  };
  const setPlayingState = (state: boolean) => {
    setisPlaying(state);
  };
  const playNext = () => {
    const nextEpisodeIndex = currentEpisodeIndex + 1;
    if (nextEpisodeIndex >= episodeList.length) {
      return;
    }
    setCurrentEpisodeIndex(nextEpisodeIndex);
  };
  const playPrevious = () => {
    if (currentEpisodeIndex > 0) {
      return;
    }
    const nextEpisodeIndex = currentEpisodeIndex - 1;
    setCurrentEpisodeIndex(nextEpisodeIndex);
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
        playNext
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};
