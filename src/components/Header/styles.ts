import styled from 'styled-components';

const ContainerHeader = styled.div`
  display: flex;
  height: 65px;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  padding-left: 32px;
  padding-right: 16px;
  border-bottom: 1px solid #EBEBEB;
`;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const UserName = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 14px;
`;

const UserDescription = styled.div`
  font-weight: 400;
  font-size: 10px;
  line-height: 10px;
`;

const UserImgProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background-color: #6dc6f8;
  font-weight: 600;
  font-size: 20px;
  line-height: 20px;
  color: #FFFFFF;
`;

export { ContainerHeader, UserContainer, UserName, UserDescription, UserImgProfile };
