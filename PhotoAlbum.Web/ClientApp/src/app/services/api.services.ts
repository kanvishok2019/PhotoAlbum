import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {
  constructor(private _httpClient: HttpClient) {

  }
  get<T>(url: string): Observable<T> {
    return this._httpClient.get<T>(url);
  }
}
