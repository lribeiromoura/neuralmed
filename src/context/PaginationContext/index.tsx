import { createContext } from 'react';

interface PaginationControlProps {
  currentPage: number;
  totalPages: number;
  handlePerPageChange: (isAfter: boolean) => void;
  handlePageChange: (newPage: number) => void;
  startIndex: number;
  endIndex: number;
}

const PaginationContext = createContext<PaginationControlProps>(
  {} as PaginationControlProps,
);

export default PaginationContext;
