import { render, screen } from '@testing-library/react';
import ItemList from './ItemList';
import mockList from 'mocks/participation.json';
import { Participation } from 'types/participation';

describe('ItemList Component', () => {
  it('should render correctly', () => {
    const characters: Participation[] = mockList.data.results;
    render(<ItemList title='Teste' items={characters}></ItemList>);
    const itemList = screen.getByTestId('item-list-container');

    expect(itemList).toBeInTheDocument();
  });

  it('should render title correctly', () => {
    const items: Participation[] = mockList.data.results;

    render(<ItemList title='Teste' items={items}></ItemList>);
    const title = screen.getByTestId('item-list-title');

    expect(title).toHaveTextContent('Teste');
  });

  it('should render items correctly', () => {
    const items: Participation[] = mockList.data.results;

    render(<ItemList title='Teste' items={items}></ItemList>);
    const itens = screen.getAllByTestId('item-card');

    expect(itens).toHaveLength(items.length);
  });
});
