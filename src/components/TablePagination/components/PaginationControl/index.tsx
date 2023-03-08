import PaginationContext from 'context/PaginationContext';
import { useContext } from 'react';
import { PaginationNumber, PaginationNumberWrapper } from './styles';

export default function PaginationControl() {
  const {
    totalPages,
    currentPage,
    handlePerPageChange,
    handlePageChange,
    endIndex,
    startIndex,
  } = useContext(PaginationContext);

  const pageNumbers = [];

  for (let i = 1; i < totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <PaginationNumberWrapper data-testid="pagination-number-wrapper">
      <PaginationNumber
        data-testid="pagination-first-number"
        onClick={() => handlePageChange(1)}
        active={currentPage === 1}
      >
        1
      </PaginationNumber>
      {currentPage && currentPage >= 5 ? (
        <PaginationNumber
          data-testid="pagination-number-prev"
          onClick={() => handlePerPageChange(false)}
        >
          {' '}
          {'<<'}{' '}
        </PaginationNumber>
      ) : (
        ''
      )}
      {totalPages > 1 &&
        pageNumbers.slice(startIndex, endIndex).map((page) => (
          <PaginationNumber
            key={page}
            data-testid="pagination-number"
            active={currentPage === page}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </PaginationNumber>
        ))}
      {pageNumbers.length > 5 && totalPages !== currentPage ? (
        <PaginationNumber
          onClick={() => handlePerPageChange(true)}
          data-testid="pagination-number-next"
        >
          {'>>'}
        </PaginationNumber>
      ) : (
        ''
      )}
      {totalPages > 1 && (
        <PaginationNumber
          onClick={() => handlePageChange(totalPages)}
          active={currentPage === totalPages}
          data-testid="pagination-number-last"
        >
          {totalPages}
        </PaginationNumber>
      )}
    </PaginationNumberWrapper>
  );
}
