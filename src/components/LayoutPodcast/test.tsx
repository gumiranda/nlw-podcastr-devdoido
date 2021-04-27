import { render, screen } from '@testing-library/react';
import Main from '../Main';

import LayoutPodcast from './LayoutPodcast';

describe('<LayoutPodcast />', () => {
  it('should render the heading', () => {
    const { container } = render(
      <LayoutPodcast>
        <Main />
      </LayoutPodcast>
    );
    expect(screen.getByRole('heading', { name: /react avançado/i })).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
