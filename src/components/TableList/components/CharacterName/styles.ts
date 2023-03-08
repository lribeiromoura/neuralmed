import styled from 'styled-components';

const CharacterTitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CharacterName = styled.div`
  margin-left: 16px;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
`;

const CharacterImg = styled.img`
  border-radius: 5px;
  width: 44px;
  height: 44px;
`;

export { CharacterImg, CharacterName, CharacterTitleContainer };
