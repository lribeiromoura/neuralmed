import { render, screen } from '@testing-library/react';
import DefaultPage from '.';


describe('Default Page Component', () => {
  it('should render correctly', () => {
    render(<DefaultPage></DefaultPage>);
    const defaultPage = screen.getByTestId('default-page-component');

    expect(defaultPage).toBeInTheDocument();
  });

  it('should render outlet correctly', () => {
    render(<DefaultPage></DefaultPage>);
    const outlet = screen.getByTestId('default-page-outlet');

    expect(outlet).toBeInTheDocument();
  });
});
