import styled from 'styled-components';

const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 78px
`;

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 8px;
  margin-bottom: 16px;
  padding-left: 24px;
  padding-right: 24px;
  @media (max-width: 999px) {
    display: none;
  }
`;

const TableRow = styled.div`
  margin-bottom: 8px;
  padding-left: 24px;
  padding-right: 24px;
  height: 76px;
  background: #ffffff;
  border: 1px solid #c9c9c9;
  border-radius: 5px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  @media (max-width: 999px) {
    height: 250px;
  }
`;

const TableRowContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 8px;
  align-content: center;
  align-items: center;
  height: 100%;
  @media (max-width: 999px) {
    grid-template-columns: 1fr;
    align-content: initial;
  }
  &:hover {
    scale: 1.01;
    cursor: pointer;
  }
`;

const TableHeaderTitle = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
  color: #404040;
`;

export {
  TableContainer,
  TableHeader,
  TableRow,
  TableRowContainer,
  TableHeaderTitle,
};
