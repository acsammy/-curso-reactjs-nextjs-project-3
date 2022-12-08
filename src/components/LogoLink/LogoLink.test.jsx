import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { LogoLink } from '.';

describe('<LogoLink />', () => {
  it('should render text logo', () => {
    renderTheme(<LogoLink link="#target" text="Olá mundo" />);
    const heading = screen.findByRole('heading', { name: 'Olá mundo' });
    expect(heading.firstChild).toHaveAttribute('href', '#target');
  });

  it('should render text logo', () => {
    renderTheme(
      <LogoLink link="#target" text="Olá mundo" srcImg="image.jpg" />,
    );
    expect(screen.findByRole('img', { name: 'Olá mundo' })).toHaveAttribute(
      'src',
      'image.jpg',
    );
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<LogoLink>children</LogoLink>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
