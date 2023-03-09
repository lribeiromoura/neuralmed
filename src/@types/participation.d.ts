import { Thumbnail } from './thumbnail';

export interface Participation {
  id: int;
  title: string;
  description: string | null;
  thumbnail: Thumbnail;
}
