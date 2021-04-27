import { render, screen } from '@testing-library/react';

import EpisodeDetails from './EpisodeDetails';

//It works for me calling jest.mock before the Component Test Case like you mentioned:

jest.mock('next/config', () => () => ({
  images: {
    domains: ['storage.googleapis.com']
  }
}));
describe('<EpisodeDetails />', () => {
  it('should render the heading', () => {
    const { container } = render(
      <EpisodeDetails
        episode={{
          title: 'test',
          thumbnail: '/logo.svg'
        }}
      />
    );
    expect(screen.getByRole('heading', { name: /test/i })).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
