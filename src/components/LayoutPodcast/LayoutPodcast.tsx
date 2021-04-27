import { ReactNode } from 'react';
import Player from '../Player';
import * as S from './styles';

interface IProps {
  children: ReactNode;
}
const LayoutPodcast = ({ children, ...props }: IProps) => {
  return (
    <S.Wrapper>
      <main>{children}</main>
      <Player />
    </S.Wrapper>
  );
};

export default LayoutPodcast;
