import styled from 'styled-components';

const Container = styled.div`
content: "";
  position: absolute;
  z-index: 999;
  width: 0;
  height: 100vh;
  background: #4B7CB6;
  top:65px;
  left: 0;
  animation-name: veil;
  animation-duration: 2s;
  animation-iteration-count: 1;
  @keyframes veil {
    0% {
      width: 0;
      left: 0;
    }
    50% {
      width: 100%;
      left: 0;
    }
    100% {
      width: 0;
      left: 100%;
    }
  }
  
`;



export {
  Container
};
