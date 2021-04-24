import * as S from './styles';
import { Episode } from 'domain/entities';
import Image from 'next/image';

interface IProps {
  allEpisodes: Episode[];
  title: string;
}
const AllEpisodesPodcast = ({
  allEpisodes = [],
  title = 'Todos os episódios',
  ...props
}: IProps) => (
  <S.Wrapper>
    <h2>{title}</h2>
    <table cellSpacing={0}>
      <thead>
        <th></th>
        <th>Podcast</th>
        <th>Integrantes</th>
        <th>Data</th>
        <th>Duração</th>
      </thead>
      <tbody>
        {allEpisodes.map((episode) => {
          return (
            <tr key={episode.id}>
              <td style={{ width: 72 }}>
                <Image
                  objectFit="cover"
                  width={192}
                  height={192}
                  src={episode.thumbnail}
                  alt={episode.title}
                />
              </td>
              <td>
                <a href="">{episode.title}</a>
              </td>
              <td>{episode.members}</td>
              <td style={{ width: 100 }}>{episode.publishedAt}</td>
              <td>{episode.durationAsString}</td>
              <td>
                <button type="button">
                  <img src="/play-green.svg" alt="Tocar episódio" />
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </S.Wrapper>
);

export default AllEpisodesPodcast;
