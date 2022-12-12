import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { NavLinks } from '.';
import mock from './mock';
import { theme } from '../../styles/theme';

describe('<NavLinks />', () => {
  it('should render links', () => {
    renderTheme(<NavLinks links={mock} />);
    expect(screen.findAllByRole('link')).toHaveLength(mock.length);
  });

  it('should not render links', () => {
    renderTheme(<NavLinks />);
    expect(screen.queryAllByText(/link/i)).not().toBeNull();
  });

  it('should not render links', () => {
    renderTheme(<NavLinks />);
    expect(screen.getByText(/link 10/i)).toHaveStyleRole(
      'flex-flow',
      'column wrap',
      {
        media: theme.media.ltMedium,
      },
    );
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<NavLinks />);
    expect(screen).toMatchSnapshot();
  });
});
