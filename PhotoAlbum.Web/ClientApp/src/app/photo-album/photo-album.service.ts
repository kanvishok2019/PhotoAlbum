import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ApiService } from '../services/api.services';
import { PaginatedAlbum } from './models/paginated-album';

@Injectable()
export class PhotoAlbumService {

  constructor(private _apiService: ApiService) {

  }

  getAlbums(userId: number, pagenumber: number, itemsPerPage: number): Observable<PaginatedAlbum> {
    var url = environment.albumApi.albums + "?" + 'userId=' + userId
      + "&" + 'pagenumber=' + pagenumber
      + "&" + 'itemsPerPage=' + itemsPerPage
    return this._apiService.get<PaginatedAlbum>(url);
  }
}
