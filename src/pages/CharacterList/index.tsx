import SearchComponent from './components/SearchSection';
import {
  Container
} from './styles';

export default function CharacterList() {

  const onSubmit = (value: string) => {
    console.log(value);
    // TODO Search Characters
  };

  return (
    <Container>
      <SearchComponent onSubmit={onSubmit} />
      {/* <div>Table</div> */}
    </Container>
  );
}
