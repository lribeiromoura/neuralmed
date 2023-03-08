import styled from 'styled-components';
interface Props {
  active?: boolean;
}
const PaginationNumber = styled.li<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  font-style: normal;
  font-weight: 400;
  font-size: ${(props) => (props.active ? '16px;' : '14px;')};
  line-height: 14px;
  color: ${(props) => (props.active ? '#FFFFFF' : '#707070;')};
  background: ${(props) => (props.active ? '#247dd0' : 'transparent;')};
  &:hover {
    scale: ${(props) => (!props.active ? '1.3' : '')};
    cursor: pointer;
  }
`;

export { PaginationNumber };
