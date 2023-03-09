import { useEffect, useState } from 'react';

import { Container } from './styles';

import { isValidString } from 'utils/checkStr';

import { getCharacters } from 'services/marvel';

import { CharacterList } from 'types/characters';

import TableList from '../../components/TableList';
import SearchComponent from '../../components/SearchSection';
import TablePagination from 'components/TablePagination';
import PaginationContext from 'context/PaginationContext';
import { handlePaginationIndex } from './helpers/handlePaginationIndex';
import { useNavigate } from 'react-router-dom';
import Loading from 'components/Loading';

export default function CharactersList() {
  const [isLoading, setIsLoading] = useState(false);
  const [listCharacters, setListCharacters] = useState<CharacterList[]>([]);
  const [searchedText, setSearchedText] = useState('');
  const [limit] = useState(10);
  const [offSet, setOffset] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [startIndex, setStartIndex] = useState(1);
  const [endIndex, setEndIndex] = useState(5);
  const navigate = useNavigate();

  const onSubmit = (characterName: string) => {
    setOffset(0);
    setCurrentPage(1);
    if (!isValidString(characterName)) {
      setSearchedText('');
      getAllCharactersList();
      return;
    }
    setSearchedText(characterName);
  };

  const onNavigateDetails = (characterId: number) => {
    navigate(`/details/${characterId}`);
  };

  const searchCharacterByText = async () => {
    setIsLoading(true);
    const res = await getCharacters(limit, offSet, searchedText);
    setTotalPages(Math.ceil(res.total / res.limit));
    setListCharacters(res.results);
    setIsLoading(false);
    return res;
  };

  const getAllCharactersList = async () => {
    setIsLoading(true);
    const res = await getCharacters(limit, offSet);
    setTotalPages(Math.ceil(res.total / res.limit));
    setListCharacters(res.results);
    setIsLoading(false);
    return res;
  };

  const handlePageChange = (number: number) => {
    setCurrentPage(number);
    setOffset((number - 1) * limit);
  };

  const handlePerPageChange = (isAfter: boolean) => {
    if (isAfter) {
      setCurrentPage(currentPage + 1);
      setOffset(offSet + limit);
      return;
    }
    setCurrentPage(currentPage - 1);
    setOffset(offSet - limit);
    return;
  };

  useEffect(() => {
    searchCharacterByText();
  }, [currentPage, searchedText]);

  useEffect(() => {
    const index = handlePaginationIndex(currentPage, totalPages);
    setStartIndex(index.start);
    setEndIndex(index.end);
  }, [currentPage, totalPages]);

  return (
    <Container>
      {isLoading ? (
        <Loading></Loading>
      ) : (
        <>
          <SearchComponent onSubmit={onSubmit} />
          <TableList
            listCharacters={listCharacters}
            onNavigateDetails={onNavigateDetails}
          />
          <PaginationContext.Provider
            value={{
              totalPages,
              handlePageChange,
              currentPage,
              handlePerPageChange,
              startIndex,
              endIndex,
            }}
          >
            {totalPages > 0 ? <TablePagination></TablePagination> : <></>}
          </PaginationContext.Provider>
        </>
      )}
    </Container>
  );
}
