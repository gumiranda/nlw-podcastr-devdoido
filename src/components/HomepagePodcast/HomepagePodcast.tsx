import { ReactNode } from 'react';
import * as S from './styles';
interface IProps {
  children: ReactNode;
}
const HomepagePodcast = ({ children, ...props }: IProps) => (
  <S.Wrapper>{children}</S.Wrapper>
);

export default HomepagePodcast;
