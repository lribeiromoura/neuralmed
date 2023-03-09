import { CharacterList } from 'types/characters';
import CharacterDetails from './components/CharacterDetails';
import CharacterTitle from './components/CharacterName';
import {
  TableContainer,
  TableHeader,
  TableRow,
  TableRowContainer,
  TableHeaderTitle,
} from './styles';

interface TableListProps {
  listCharacters: CharacterList[];
  onNavigateDetails: (characterId: number) => void;
}

export default function TableList({ listCharacters, onNavigateDetails }: TableListProps) {
  return listCharacters && listCharacters.length > 0 ? (
    <TableContainer data-testid="table-list">
      <TableHeader>
        <TableHeaderTitle>Personagem</TableHeaderTitle>
        <TableHeaderTitle>Séries</TableHeaderTitle>
        <TableHeaderTitle>Eventos</TableHeaderTitle>
      </TableHeader>
      {listCharacters.map((character) => (
        <TableRow 
          key={character.id} 
          data-testid="table-row" 
          onClick={() => onNavigateDetails(character.id)}>
          <TableRowContainer>
            <CharacterTitle
              CharacterTitle={character.name}
              Thumbnail={character.thumbnail}
            />
            <CharacterDetails
              characterDetails={character.series.items}
              messageNotFound="Nenhuma série encontrada"
            />
            <CharacterDetails
              characterDetails={character.events.items}
              messageNotFound="Nenhum evento encontrado"
            />
          </TableRowContainer>
        </TableRow>
      ))}
    </TableContainer>
  ) : (
    <></>
  );
}
