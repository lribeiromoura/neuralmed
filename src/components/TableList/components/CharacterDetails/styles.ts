import styled from 'styled-components';

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const DetailDescription = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 20px;
  color: #565656;
  @media(min-width:1000px) and (max-width: 1440px){
    max-width: 18em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  @media(max-width:999px) {
    max-width: 18em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export { DetailContainer, DetailDescription };
