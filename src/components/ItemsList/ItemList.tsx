import { Participation } from 'types/participation';
import {
  Container,
  ItemTitle,
  ItemsWrapper,
  Img,
  ItemCard,
  ItemInfoTitle,
  ItemInfoSubTitle,
  ItemInfoWrapper,
} from './styles';

interface ItemListProps {
  title: string;
  items?: Participation[];
}

export default function ItemList({ title, items }: ItemListProps) {
  return (
    <Container data-testid="item-list-container">
      <ItemTitle data-testid="item-list-title">{title}</ItemTitle>
      <ItemsWrapper>
        {items && items.map((item) => (
          <ItemCard data-testid="item-card" key={item.id}>
            <Img src={item.thumbnail.path + '.' + item.thumbnail.extension}></Img>
            <ItemInfoWrapper>
              <ItemInfoTitle>{item.title}</ItemInfoTitle>
              <ItemInfoSubTitle>
                {item.description}
              </ItemInfoSubTitle>
            </ItemInfoWrapper>
          </ItemCard>
        ))}
      </ItemsWrapper>
    </Container>
  );
}
