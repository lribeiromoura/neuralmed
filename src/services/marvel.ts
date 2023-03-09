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

export async function getCharacterById(
  characterId: string | undefined
) {
  const response = await Api.get<DefaultResponse>(
    `characters/${characterId}?apikey=${apiKey}`,
  );
  return response.data.data;
}

export async function getEventsByCharacterId(
  characterId: string | undefined
) {
  const response = await Api.get<DefaultResponse>(
    `characters/${characterId}/events?apikey=${apiKey}`,
  );
  return response.data.data;
}

export async function getComicsByCharacterId(
  characterId: string | undefined
) {
  const response = await Api.get<DefaultResponse>(
    `characters/${characterId}/comics?apikey=${apiKey}`,
  );
  return response.data.data;
}

export async function getSeriesByCharacterId(
  characterId: string | undefined
) {
  const response = await Api.get<DefaultResponse>(
    `characters/${characterId}/series?apikey=${apiKey}`,
  );
  return response.data.data;
}