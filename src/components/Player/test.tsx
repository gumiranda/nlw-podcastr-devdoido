import { render, screen } from '@testing-library/react';

import Player from './Player';

describe('<Player />', () => {
  it('should render the logo image', () => {
    const { container } = render(<Player />);
    expect(screen.getByRole('img', { name: /Tocando agora/i })).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
