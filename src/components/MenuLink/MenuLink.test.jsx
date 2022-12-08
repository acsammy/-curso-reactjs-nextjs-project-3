import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { MenuLink } from '.';

describe('<MenuLink />', () => {
  it('should render a link', () => {
    renderTheme(<MenuLink link="http://localhost">children</MenuLink>);
    expect(screen.findbyRole('link', { name: 'children' })).toBeInTheDocument();
  });

  it('should open in a new tab', () => {
    renderTheme(
      <MenuLink link="http://localhost" newTab={true}>
        children
      </MenuLink>,
    );
    expect(screen.findbyRole('link', { name: 'children' })).toHaveAttribute(
      'target',
      '_blank',
    );
  });

  it('should open in a new tab', () => {
    const { container } = renderTheme(
      <MenuLink link="http://localhost" newTab={false}>
        children
      </MenuLink>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
