import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import PaginationContext from 'context/PaginationContext';
import TablePagination from '.';

const mockValue = {
  totalPages: 10,
  handlePageChange: jest.fn(),
  currentPage: 1,
  handlePerPageChange: jest.fn(),
  startIndex: 1,
  endIndex: 5,
};

describe('Table Pagination', () => {
  const activeColor = '#247dd0';
  it('should render correctly', async () => {
    render(
      <PaginationContext.Provider value={{ ...mockValue }}>
        <TablePagination></TablePagination>
      </PaginationContext.Provider>,
    );

    const tablePagination = screen.getByTestId('table-pagination');
    await waitFor(()=>expect(tablePagination).toBeInTheDocument());
    
  });

  it('should render first number, check if it is active and click and callhandlePageChange', () => {
    render(
      <PaginationContext.Provider value={{ ...mockValue }}>
        <TablePagination></TablePagination>
      </PaginationContext.Provider>,
    );

    const firstNumber = screen.getByTestId('pagination-first-number');

    expect(firstNumber).toHaveStyle(`background-color:${activeColor}`);

    fireEvent.click(firstNumber);

    expect(mockValue.handlePageChange).toHaveBeenCalled();
  });

  it('should render last number, click and call', () => {
    render(
      <PaginationContext.Provider value={{ ...mockValue }}>
        <TablePagination></TablePagination>
      </PaginationContext.Provider>,
    );

    const lastNumber = screen.getByTestId('pagination-number-last');

    expect(lastNumber).toHaveTextContent(mockValue.totalPages.toString());

    fireEvent.click(lastNumber);

    expect(mockValue.handlePageChange).toHaveBeenCalled();
  });

  it('should render next button, click and call handlePerPageChange', () => {
    render(
      <PaginationContext.Provider value={{ ...mockValue }}>
        <TablePagination></TablePagination>
      </PaginationContext.Provider>,
    );

    const nextButton = screen.getByTestId('pagination-number-next');

    expect(nextButton).toBeInTheDocument();

    fireEvent.click(nextButton);

    expect(mockValue.handlePerPageChange).toHaveBeenCalled();
  });

  it('should check if last option is active, render prev button, click prev button, and call handlePerPageChange', () => {
    render(
      <PaginationContext.Provider value={{ ...mockValue, currentPage: 10 }}>
        <TablePagination></TablePagination>
      </PaginationContext.Provider>,
    );

    const lastNumber = screen.getByTestId('pagination-number-last');

    expect(lastNumber).toBeInTheDocument();

    expect(lastNumber).toHaveStyle(`background-color:${activeColor}`);

    const prevButton = screen.getByTestId('pagination-number-prev');

    expect(prevButton).toBeInTheDocument();

    fireEvent.click(prevButton);

    expect(mockValue.handlePerPageChange).toHaveBeenCalled();
  });

  it('should click random number and check call handlePageChange', () => {
    render(
      <PaginationContext.Provider value={{ ...mockValue }}>
        <TablePagination></TablePagination>
      </PaginationContext.Provider>,
    );

    const paginationNumber = screen.getAllByTestId('pagination-number');

    const randomPage =
      paginationNumber[Math.floor(Math.random() * paginationNumber.length)];

    expect(randomPage).toBeInTheDocument();

    fireEvent.click(randomPage);

    expect(mockValue.handlePageChange).toHaveBeenCalled();
  });
});
