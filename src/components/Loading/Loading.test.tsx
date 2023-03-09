import { render, screen } from '@testing-library/react';
import Loading from '.';

describe('Header Component', () => {
  it('should render correctly', () => {
    render(<Loading></Loading>);
    const loading = screen.getByTestId('loading');

    expect(loading).toBeInTheDocument();
  });
});
