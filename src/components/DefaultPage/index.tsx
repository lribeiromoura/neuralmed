import Header from 'components/Header';
import { Outlet } from 'react-router-dom';
export default function DefaultPage() {
  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>
    </>
  );
}
