import { render, screen } from '@testing-library/react';
import Main from './Main';

describe('<Main/>', () => {
  it('should render the heading', () => {
    render(<Main />);
    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument();
  });
  it('should render correctly', () => {
    const { container } = render(<Main />);
    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
