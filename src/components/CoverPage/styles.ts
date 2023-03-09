import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  height: 289px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 36px;
  background: linear-gradient(
    358deg,
    transparent 0%,
    transparent 11%,
    #070707d9 13%
  );
  @media (min-width: 1000px) and (max-width: 1440px) {
    background: linear-gradient(
      357deg,
      transparent 0%,
      transparent 10%,
      rgba(7, 7, 7, 0.85) 11%
    );
  }
  @media (max-width: 999px) {
    flex-direction: column;
    background: rgba(7, 7, 7, 0.85);
    height: auto;
    gap: 35px;
    padding-bottom: 30px;
    padding-top: 16px;
  }
`;

const Img = styled.img`
  display: block;
  width: 300px;
  height: 289px;
  left: 0px;
  top: 65px;
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  place-content: center;
  width: 100%;
  height: 100%;
  gap: 8px;
  flex-direction: column;
  padding: 0px 35px 0px 35px;
`;

const InfoTitle = styled.div`
  font-weight: 600;
  font-size: 36px;
  line-height: 37px;
  color: #ffffff;
  text-align: center;
`;

const InfoSubTitle = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  color: #ffffff;
  margin-top: 16px;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export { Container, Img, InfoContainer, InfoTitle, InfoSubTitle, InfoWrapper };
