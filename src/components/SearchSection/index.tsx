import { FormEvent, useState } from 'react';
import { SearchInput, SearchLabel, SearchSection, SearchTitle } from './styles';

interface SearchComponentProps {
  onSubmit: (value: string) => void;
}

export default function SearchComponent({ onSubmit }: SearchComponentProps) {
  const [searchField, setSearchField] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(searchField);
  };

  return (
    <SearchSection data-testid="search-section">
      <SearchTitle>Busca de personagens</SearchTitle>
      <SearchLabel>Nome do personagem</SearchLabel>
      <form onSubmit={(e) => handleSubmit(e)}>
        <SearchInput
          placeholder="Buscar"
          type="text"
          value={searchField}
          onChange={(e) => setSearchField(e.target.value)}
        ></SearchInput>
      </form>
    </SearchSection>
  );
}
