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

export default function CharacterDetails() {
  const { characterId } = useParams<{ characterId?: string }>();

  const [characterDetail, setCharacterDetail] = useState<CharacterDetail>();
  const [characterEvents, setCharacterEvents] = useState<Participation[]>([]);
  const [characterComics, setCharacterComics] = useState<Participation[]>([]);
  const [characterSeries, setCharacterSeries] = useState<Participation[]>([]);

  const getCharactersDetails = async () => {
    const res = await getCharacterById(characterId);
    setCharacterDetail(res.results[0]);
  };

  const getComics = async () => {
    const res = await getComicsByCharacterId(characterId);
    console.log(res.results);
    setCharacterComics(res.results);
  };

  const getEvents = async () => {
    const res = await getEventsByCharacterId(characterId);
    setCharacterEvents(res.results);
  };

  const getSeries = async () => {
    const res = await getSeriesByCharacterId(characterId);
    setCharacterSeries(res.results);
  };

  useEffect(() => {
    getCharactersDetails();
  }, []);

  useEffect(() => {
    getComics();
    getEvents();
    getSeries();
  }, [characterDetail]);

  return (
    characterDetail && (
      <>
        <CoverPage characterDetail={characterDetail}></CoverPage>       
        <ItemList title='Eventos' items={characterEvents}></ItemList>
        <ItemList title='Series' items={characterSeries}></ItemList>
        <ItemList title='Comics' items={characterComics}></ItemList>
      </>
    )
  );
}
