import { Items } from 'types/items';
import { DetailContainer, DetailDescription } from './styles';

interface CharacterDetailsProps {
  characterDetails: Items[];
  messageNotFound: string;
}

export default function CharacterDetails({
  characterDetails,
  messageNotFound,
}: CharacterDetailsProps) {
  return (
    <DetailContainer>
      {characterDetails.length === 0 ? (
        <DetailDescription>{messageNotFound}</DetailDescription>
      ) : (
        characterDetails
          .slice(0, 3)
          .map((detail, index) => (
            <DetailDescription key={index}>
              {detail.name}
            </DetailDescription>
          ))
      )}
    </DetailContainer>
  );
}
