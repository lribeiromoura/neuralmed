import Header from 'components/Header';
import { Outlet } from 'react-router-dom';
import { Container } from './styles';

export default function DefaultPage() {

  return (
    <Container data-testid="default-page-component">
      <Header />
      <div data-testid="default-page-outlet">
        <Outlet />
      </div>
    </Container>
  );
}
