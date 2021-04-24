import * as S from './styles';
import { Episode } from 'domain/entities';
interface IProps {
  allEpisodes: Episode[];
}
const AllEpisodesPodcast = ({ allEpisodes, ...props }: IProps) => (
  <S.Wrapper>
    <h1>AllEpisodesPodcast</h1>
  </S.Wrapper>
);

export default AllEpisodesPodcast;
