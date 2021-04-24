import * as S from './styles';
import { Episode } from 'domain/entities';
interface IProps {
  latestEpisodes: Episode[];
  title: string;
}
const LatestEpisodesPodcast = ({
  latestEpisodes = [],
  title = 'Últimos lançamentos'
}: IProps) => (
  <S.Wrapper>
    <h2>{title}</h2>
    <ul></ul>
  </S.Wrapper>
);

export default LatestEpisodesPodcast;
