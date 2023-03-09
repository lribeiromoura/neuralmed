import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CoverPage from 'components/CoverPage';
import {
  getCharacterById,
  getComicsByCharacterId,
  getEventsByCharacterId,
  getSeriesByCharacterId,
} from 'services/marvel';
import { CharacterDetail } from 'types/character-detail';
import { Participation } from 'types/participation';
import ItemList from 'components/ItemsList/ItemList';
import Loading from 'components/Loading';

export default function CharacterDetails() {
  const { characterId } = useParams<{ characterId?: string }>();

  const [isLoading, setIsLoading] = useState(false);
  const [characterDetail, setCharacterDetail] = useState<CharacterDetail>();
  const [characterEvents, setCharacterEvents] = useState<Participation[]>([]);
  const [characterComics, setCharacterComics] = useState<Participation[]>([]);
  const [characterSeries, setCharacterSeries] = useState<Participation[]>([]);

  const getCharactersDetails = async () => {
    const res = await getCharacterById(characterId);
    setCharacterDetail(res.results[0]);
  };

  const getItems = async () => {
    setIsLoading(true);
    const resComics = await getComicsByCharacterId(characterId);
    const resEvents = await getEventsByCharacterId(characterId);
    const resSeries = await getSeriesByCharacterId(characterId);
    setCharacterComics(resComics.results);
    setCharacterEvents(resEvents.results);
    setCharacterSeries(resSeries.results);
    setIsLoading(false);
  };

  useEffect(() => {
    getCharactersDetails();
  }, []);

  useEffect(() => {
    getItems();
  }, [characterDetail]);

  return (
    isLoading ? <Loading /> : (
      characterDetail &&
      <>
        <CoverPage characterDetail={characterDetail}></CoverPage>       
        <ItemList title='Eventos' items={characterEvents}></ItemList>
        <ItemList title='Series' items={characterSeries}></ItemList>
        <ItemList title='Comics' items={characterComics}></ItemList>
      </>
    )
  );
}
