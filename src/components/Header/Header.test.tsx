import { render, screen } from '@testing-library/react';
import Header from '.';


describe('Header Component', () => {
  it('should render correctly', () => {
    render(<Header></Header>);
    const header = screen.getByTestId('container-header');

    expect(header).toBeInTheDocument();
  });

  it('should render logo correctly', () => {
    render(<Header></Header>);
    const logo = screen.getByTestId('logo-header');

    expect(logo).toBeInTheDocument();
  });

  it('should render user name, user description and user img', () => {
    render(<Header></Header>);
    const userName = screen.getByTestId('user-container');
    const userDescription = screen.getByTestId('user-name');
    const userImg = screen.getByTestId('user-description');

    expect(userName).toBeInTheDocument();
    expect(userDescription).toBeInTheDocument();
    expect(userImg).toBeInTheDocument();

  });
});
