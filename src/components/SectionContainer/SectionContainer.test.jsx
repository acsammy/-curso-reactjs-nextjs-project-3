import { queryByAltText, screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { SectionContainer } from '.';

describe('<SectionContainer />', () => {
  it('should render a text', () => {
    const { container } = renderTheme(
      <SectionContainer>Children</SectionContainer>,
    );
    expect(screen.queryAllByText(/Children/i)).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
