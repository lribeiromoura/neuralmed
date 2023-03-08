import { PaginationIndex } from 'types/pagination-index';

export const handlePaginationIndex = (currentPage: number, totalPages: number) => {
  const index: PaginationIndex = {
    start: 1,
    end: 5,
  };
  if (currentPage === totalPages && totalPages - currentPage <= 5) {
    index.start = currentPage - 3;
    index.end = totalPages;
  } else if (currentPage >= 5) {
    index.start = currentPage === 1 ? 1 : currentPage - 3;
    index.end = currentPage === totalPages ? totalPages : currentPage + 2;
  } else if (currentPage === 1) {
    index.start = currentPage === 1 ? 1 : currentPage;
    index.end = currentPage === totalPages ? totalPages : currentPage + 3;
  }
  return index;
};
