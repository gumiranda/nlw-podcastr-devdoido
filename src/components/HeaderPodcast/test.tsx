import { render, screen } from '@testing-library/react';
import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';
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
    const currentDate = format(new Date(), 'EEEEEE, d MMMM', { locale: ptBR });
    const { container } = render(<HeaderPodcast />);
    expect(screen.getByText(`${currentDate}`)).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
