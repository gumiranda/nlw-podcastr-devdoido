import { render, screen } from '@testing-library/react';

import LatestEpisodesPodcast from './LatestEpisodesPodcast';

describe('<LatestEpisodesPodcast />', () => {
  it('should render the heading', () => {
    const { container } = render(<LatestEpisodesPodcast />);
    expect(
      screen.getByRole('heading', { name: /LatestEpisodesPodcast/i })
    ).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
