import styled from 'styled-components';
import SearchIcon from 'assets/search-icon.svg';

const SearchSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 18px;
`;

const SearchTitle = styled.div`
  display: flex;
  font-weight: 500;
  font-size: 28px;
  line-height: 29px;
`;

const SearchLabel = styled.div`
  display: flex;
  font-weight: 500;
  font-size: 20px;
  line-height: 20px;
  margin-top: 18px;
`;

const SearchInput = styled.input`
  display: flex;
  width: 377px;
  outline: none;
  margin-top: 16px;
  height: 50px;
  background: url(${SearchIcon}) no-repeat right;
  background-color: #ffffff;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 20px;
  color: #242424;
  ::placeholder {
    font-style: italic;
    font-weight: 300;
    font-size: 20px;
    line-height: 20px;
    display: flex;
    align-items: center;
    color: #a09999;
    
  }
  @media (max-width: 999px) {
    width: 100%;
  }
`;

export { SearchInput, SearchLabel, SearchSection, SearchTitle };
