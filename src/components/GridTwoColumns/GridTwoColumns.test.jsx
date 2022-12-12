import { queryByAltText, screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { GridTwoColumns } from '.';
import { mock } from './mock';

describe('<GridTwoColumns />', () => {
  it('should render two column grid', () => {
    const { container } = renderTheme(<GridTwoColumns {...mock} />);
    expect(screen.queryAllByText(/Children/i)).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
