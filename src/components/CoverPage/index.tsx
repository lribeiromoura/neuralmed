import {
  Container,
  Img,
  InfoContainer,
  InfoTitle,
  InfoSubTitle,
  InfoWrapper,
} from './styles';
import { CharacterDetail } from 'types/character-detail';

interface CoverPageProps {
  characterDetail: CharacterDetail;
}

export default function CoverPage({ characterDetail }: CoverPageProps) {
  return (
    <Container data-testid="container-cover-page">
      <Img
        data-testid="cover-img"
        src={
          characterDetail.thumbnail.path +
          '.' +
          characterDetail.thumbnail.extension
        }
        alt=""
      />
      <InfoContainer>
        <InfoWrapper data-testid="info-wrapper">
          <InfoTitle data-testid="info-title">{characterDetail.name}</InfoTitle>
          <InfoSubTitle data-testid="info-subtitle">{characterDetail.description}</InfoSubTitle>
        </InfoWrapper>
      </InfoContainer>
    </Container>
  );
}
