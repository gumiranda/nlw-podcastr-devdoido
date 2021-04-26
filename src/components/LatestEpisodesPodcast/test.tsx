import { render, screen } from '@testing-library/react';

import LatestEpisodesPodcast from './LatestEpisodesPodcast';

describe('<LatestEpisodesPodcast />', () => {
  it('should render the heading', () => {
    const { container } = render(
      <LatestEpisodesPodcast
        episodeList={[]}
        title={'Últimos lançamentos'}
        latestEpisodes={[]}
      />
    );
    expect(
      screen.getByRole('heading', { name: /Últimos lançamentos/i })
    ).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
