import { DefaultResponse } from './api';
import { Items } from './items';
import { Thumbnail } from './thumbnail';

export interface CharactersList extends Partial<DefaultResponse> {
  id: int;
  name: string;
  description: string;
  modified: Date | string;
  resourceURI: string;
  urls: Url[];
  thumbnail: Thumbnail
  comics: {
    available: int;
    returned: int;
    collectionURI: string;
    items: Items[];
  };
  stories: {
    available: int;
    returned: int;
    collectionURI: string;
    items: Items[];
  };
  events: {
    available: int;
    returned: int;
    collectionURI: string;
    items: Items[];
  };
  series: {
    available: int;
    returned: int;
    collectionURI: string;
    items: Items[];
  };
}
