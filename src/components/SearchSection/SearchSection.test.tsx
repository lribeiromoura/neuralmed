import { fireEvent, render, screen } from '@testing-library/react';
import SearchComponent from '.';

describe('Search Section', () => {
  it('should render correctly', () => {
    const handleSubmit = jest.fn();

    render(<SearchComponent onSubmit={handleSubmit}></SearchComponent>);

    const searchSection = screen.getByTestId('search-section');
    
    expect(searchSection).toBeInTheDocument();
  });
  
  it('should type in input submit and return typed value', () => {
    const typeText = 'IronMan';
    const handleSubmit = jest.fn().mockReturnValue(typeText);

    render(<SearchComponent onSubmit={handleSubmit}></SearchComponent>);

    const input = screen.getByPlaceholderText('Buscar');

    expect(input).toBeInTheDocument();
    
    fireEvent.change((input), {
      target: {
        value: typeText
      }
    });
    
    fireEvent.submit(input);

    expect(handleSubmit).toHaveBeenCalled();
    
    expect(handleSubmit(typeText)).toBe(typeText);

  });
});
