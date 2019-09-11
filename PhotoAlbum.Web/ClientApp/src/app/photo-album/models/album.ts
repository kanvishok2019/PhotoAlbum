import { Photo } from './photo';

export interface Album {
  id: number;
  title: number;
  userId: number;
  photos: Array<Photo>;
}
