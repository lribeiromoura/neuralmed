import { Api } from './api';
import { apiKey } from 'utils/constants';
import { DefaultResponse } from 'types/api';

export async function getCharacters(
  limit: number,
  offset: number,
  characterName?: string,
) {
  const response = await Api.get<DefaultResponse>(
    `characters?orderBy=name${characterName ? `&nameStartsWith=${characterName}` : ''}&limit=${limit}&offset=${offset}&apikey=${apiKey}`,
  );
  return response.data.data;
}

export default {
  getCharacters,
};
