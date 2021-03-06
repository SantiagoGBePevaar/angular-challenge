import { Observable, map } from 'rxjs';

import { Comic } from './../models/comic';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { getResourceURI } from './utils-service';

@Injectable({
  providedIn: 'root',
})
export class ComicsService {
  private API_COMICS = `https://gateway.marvel.com/v1/public/comics?limit=5&apikey=${environment.apiKey} `;
  constructor(private http: HttpClient) {}

  public getComics(): Observable<Comic[]> {
    return this.http
      .get(this.API_COMICS)
      .pipe(map<any, Comic[]>((data: any) => data.data.results));
  }

  public getComic(resourceURI: string): Observable<Comic> {
    const uri = getResourceURI(resourceURI);
    return this.http
      .get(uri)
      .pipe(map<any, Comic>((data: any) => data.data.results[0]));
  }
}
