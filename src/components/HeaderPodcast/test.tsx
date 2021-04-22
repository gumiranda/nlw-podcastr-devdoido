import { render, screen } from '@testing-library/react';

import HeaderPodcast from './HeaderPodcast';

describe('<HeaderPodcast />', () => {
  it('should render the logo image', () => {
    const { container } = render(<HeaderPodcast />);
    expect(screen.getByRole('img', { name: /HeaderPodcast/i })).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
  it('should render the paragraph corretly', () => {
    const { container } = render(<HeaderPodcast />);
    expect(screen.getByText(/O melhor está aqui/i)).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
  it('should render the span date corretly', () => {
    const { container } = render(<HeaderPodcast />);
    expect(screen.getByText(/Qui, 8 de abril/i)).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
