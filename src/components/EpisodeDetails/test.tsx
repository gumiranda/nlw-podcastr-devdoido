import { render, screen } from '@testing-library/react';

import EpisodeDetails from './EpisodeDetails';

describe('<EpisodeDetails />', () => {

  it('should render the heading', () => {
    const { container } = render(<EpisodeDetails />);
    expect(screen.getByRole('heading', { name: /EpisodeDetails/i })).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

});
