import * as S from './styles';

const LatestEpisodesPodcast = ({ title = 'Últimos lançamentos' }) => (
  <S.Wrapper>
    <h2>{title}</h2>
    <ul></ul>
  </S.Wrapper>
);

export default LatestEpisodesPodcast;
