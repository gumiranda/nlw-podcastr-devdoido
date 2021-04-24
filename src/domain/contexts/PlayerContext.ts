import { createContext } from 'react';
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
  play: (episode: Episode) => void;
};
export const PlayerContext = createContext({} as PlayerContextData);
