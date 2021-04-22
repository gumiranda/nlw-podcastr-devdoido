import { render, screen } from '@testing-library/react';

import HeaderPodcast from './HeaderPodcast';

describe('<HeaderPodcast />', () => {
  it('should render the logo image', () => {
    const { container } = render(<HeaderPodcast />);
    expect(screen.getByRole('img', { name: /HeaderPodcast/i })).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
