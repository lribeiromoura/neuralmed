import { Items } from './items';
import { Thumbnail } from './thumbnail';
import { Url } from './url';


export interface CharacterDetail {
  id: int;
  name: string;
  description: string;
  modified: Date | string;
  resourceURI: string;
  urls: Url[];
  thumbnail: Thumbnail;
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
