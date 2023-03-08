import { PaginationIndex } from 'types/pagination-index';

export const handlePaginationIndex = (
  currentPage: number,
  totalPages: number,
) => {
  const index: PaginationIndex = {
    start: 1,
    end: 5,
  };

  const checkCurrentPageMoreThanOrEqual5 = () =>
    currentPage >= 5 ? true : false;

  const checkCurrentPageEqual1 = () => (currentPage === 1 ? true : false);

  const checkCurrentPageEqualTotal = () =>
    currentPage === totalPages ? true : false;

  const checkDiffBetweenTotalAndCurrent = () =>
    totalPages - currentPage <= 5 ? true : false;

  if (checkCurrentPageEqualTotal() && checkDiffBetweenTotalAndCurrent()) {
    index.start =
      currentPage - 3 === 0 || currentPage - 3 < 1 ? 1 : currentPage - 3;
    index.end = totalPages;
  } else if (checkCurrentPageMoreThanOrEqual5()) {
    index.start = currentPage === 1 ? 1 : currentPage - 3;
    index.end = currentPage === totalPages ? totalPages : currentPage + 2;
  } else if (checkCurrentPageEqual1()) {
    index.start = currentPage === 1 ? 1 : currentPage;
    index.end = currentPage === totalPages ? totalPages : currentPage + 3;
  }
  return index;
};
