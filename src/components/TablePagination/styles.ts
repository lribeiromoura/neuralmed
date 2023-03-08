import styled from 'styled-components';
interface Props {
  active?: boolean;
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  position: fixed;
  align-items: center;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1rem 2rem;
  height: 60px;
  background: rgb(255, 255, 255);
  border: 1px solid rgb(235, 235, 235);
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const PaginationWrapper = styled.ul`
  display: flex;
`;

const PaginationNumber = styled.li<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  color: ${(props) => (props.active ? '#FFFFFF' : '#707070;')};
  background: ${(props) => (props.active ? '#247dd0' : 'transparent;')};
`;

export { Container, PaginationNumber, PaginationWrapper, Wrapper };
