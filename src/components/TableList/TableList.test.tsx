import { fireEvent, render, screen } from '@testing-library/react';
import { CharacterList } from 'types/characters';
import mockList from 'mocks/characterList.json';
import TableList from '.';

describe('Table List', () => {
  it('should not render with an empty array', () => {
    const navigate = jest.fn();

    render(
      <TableList listCharacters={[]} onNavigateDetails={navigate}></TableList>,
    );

    const tableList = screen.queryByText('table-list');

    expect(tableList).not.toBeInTheDocument();
  });

  it('should render with array', () => {
    const characters: CharacterList[] = mockList.results;
    const navigate = jest.fn();

    render(
      <TableList
        listCharacters={characters}
        onNavigateDetails={navigate}
      ></TableList>,
    );

    const itens = screen.getAllByTestId('table-row');
    const tableList = screen.getByTestId('table-list');

    expect(tableList).toBeInTheDocument();
    expect(itens).toHaveLength(characters.length);
  });

  it('should render with array and call onNavigateDetails', () => {
    const characters: CharacterList[] = mockList.results;
    const navigate = jest.fn();

    render(
      <TableList
        listCharacters={characters}
        onNavigateDetails={navigate}
      ></TableList>,
    );

    const itens = screen.getAllByTestId('table-row');
    const tableList = screen.getByTestId('table-list');

    expect(tableList).toBeInTheDocument();
    fireEvent.click(itens[0]);
    expect(navigate).toBeCalled();
  });
});
