import { Api } from './api';
import { apiKey } from 'utils/constants';
import { CharactersList } from 'types/characters';

export async function getCharacters(
  limit: number,
  offset: number,
  characterName?: string,
) {
  const response = await Api.get<CharactersList>(
    `characters?orderBy=name${characterName ? `&nameStartsWith=${characterName}` : ''}&limit=${limit}&offset=${offset}&apikey=${apiKey}`,
  );
  return response.data;
}

export default {
  getCharacters,
};
