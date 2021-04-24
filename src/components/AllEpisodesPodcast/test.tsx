import { render, screen } from '@testing-library/react';

import AllEpisodesPodcast from './AllEpisodesPodcast';

describe('<AllEpisodesPodcast />', () => {
  it('should render the heading', () => {
    const { container } = render(<AllEpisodesPodcast />);
    expect(
      screen.getByRole('heading', { name: /AllEpisodesPodcast/i })
    ).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
