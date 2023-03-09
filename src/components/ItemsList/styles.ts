import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 124px;
  padding-right: 124px;
  @media (max-width: 999px) {
    align-items: center;
  }
`;

const ItemCard = styled.div`
  width: 268px;
  height: 438px;
  background: #000000;
`;
const ItemInfoTitle = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 16px;
  color: #ffffff;
`;
const ItemInfoSubTitle = styled.div`
  max-height: 70px;
  overflow: auto;
  font-weight: 400;
  font-size: 10px;
  line-height: 10px;
  color: #ffffff;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const ItemInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 157px;
  padding: 16px;
`;

const ItemTitle = styled.div`
  display: flex;
  font-weight: 600;
  font-size: 20px;
  line-height: 20px;
`;

const ItemsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  margin-top: 16px;
  margin-bottom: 35px;
  grid-gap: 40px;
`;

const ImageWrapper = styled.div`
  width: 268px;
  height: 265px;
`;

const Img = styled.img`
  width: 268px;
  height: 265px;
`;

export {
  Container,
  ImageWrapper,
  Img,
  ItemInfoTitle,
  ItemInfoSubTitle,
  ItemInfoWrapper,
  ItemCard,
  ItemTitle,
  ItemsWrapper,
};
