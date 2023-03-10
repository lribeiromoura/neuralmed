import { Thumbnail } from 'types/thumbnail';
import { CharacterName, CharacterTitleContainer, CharacterImg } from './styles';

interface CharacterTitleProps {
  CharacterTitle: string;
  Thumbnail: Thumbnail;
}

export default function CharacterTitle({
  CharacterTitle,
  Thumbnail,
}: CharacterTitleProps) {
  return (
    <CharacterTitleContainer data-testid="character-title-container">
      <CharacterImg src={Thumbnail.path + '.' +Thumbnail.extension}></CharacterImg>
      <CharacterName>
        {CharacterTitle}
      </CharacterName>
    </CharacterTitleContainer>
  );
}
