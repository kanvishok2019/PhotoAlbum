 import { Album } from './album';

export interface PaginatedAlbum {

  albums: Array<Album>;
  totalItems: number;
  itemsPerPage: number;
  actualPage: number;
  totalPages: string;
  previous: string;
  next: string;
}
