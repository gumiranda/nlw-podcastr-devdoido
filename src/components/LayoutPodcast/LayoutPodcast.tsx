import { PlayerContext } from 'domain/contexts';
import { ReactNode } from 'react';
import Player from '../Player';
import * as S from './styles';

interface IProps {
  children: ReactNode;
}
const LayoutPodcast = ({ children, ...props }: IProps) => (
  <PlayerContext.Provider value={'teste1'}>
    <S.Wrapper>
      <main>{children}</main>
      <Player />
    </S.Wrapper>
  </PlayerContext.Provider>
);

export default LayoutPodcast;
