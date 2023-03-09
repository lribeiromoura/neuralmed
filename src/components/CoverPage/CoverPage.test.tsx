import { render, screen } from '@testing-library/react';
import { CharacterDetail } from 'types/character-detail';
import mockList from 'mocks/characterDetails.json';

import CoverPage from '.';

describe('CoverPage Component', () => {
 
  it('should render correctly', () => {
    const charactersDetails: CharacterDetail = mockList.results[0];

    render(<CoverPage characterDetail={charactersDetails}></CoverPage >);
    const coverPage = screen.getByTestId('container-cover-page');

    expect(coverPage).toBeInTheDocument();
  });

  it('should render name and subtitle correctly', () => {
    const charactersDetails: CharacterDetail = mockList.results[0];

    render(<CoverPage characterDetail={charactersDetails}></CoverPage >);
    const title = screen.getByTestId('info-title');
    const subtitle = screen.getByTestId('info-subtitle');

    expect(title).toHaveTextContent(charactersDetails.name);
    expect(subtitle).toHaveTextContent(charactersDetails.description);

  });
});
