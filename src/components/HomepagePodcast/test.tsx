import { render, screen } from '@testing-library/react';
import Main from '../Main';

import HomepagePodcast from './HomepagePodcast';

describe('<HomepagePodcast />', () => {
  it('should render the heading', () => {
    const { container } = render(
      <HomepagePodcast>
        <Main />
      </HomepagePodcast>
    );
    expect(screen.getByRole('heading', { name: /react avançado/i })).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
