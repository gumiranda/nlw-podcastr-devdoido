import { render, screen } from '@testing-library/react'

import LayoutPodcast from './LayoutPodcast'

describe('<LayoutPodcast />', () => {

  it('should render the heading', () => {
    const { container } = render(<LayoutPodcast />);
    expect(screen.getByRole('heading', { name: /LayoutPodcast/i })).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  })

})
