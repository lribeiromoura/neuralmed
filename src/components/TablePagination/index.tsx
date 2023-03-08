import PaginationControl from './components/PaginationControl';
import { Container, PaginationWrapper, Wrapper } from './styles';

export default function TablePagination() {
  return (
    <Container>
      <Wrapper>
        <PaginationWrapper>
          <PaginationControl></PaginationControl>
        </PaginationWrapper>
      </Wrapper>
    </Container>
  );
}
