import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

export const renderTheme = (children) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
