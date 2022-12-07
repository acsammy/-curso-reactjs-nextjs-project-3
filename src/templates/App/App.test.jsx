import { render, screen } from '@testing-library/react';
import { Home } from '.';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';

it('renders learn react link', () => {
  const { debug } = renderTheme(<Home />);
  const headingContainer = screen.findByRole('heading', {
    name: 'Oi',
  }).parentElement;
  expect(headingContainer).toHaveStyleRule('backgound', 'red');
});
