import { Observable, map } from 'rxjs';

import { Character } from './../models/character';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  private API_CHARACTERS = `https://gateway.marvel.com/v1/public/characters?apikey=${environment.apiKey}`;
  constructor(private http: HttpClient) {}

  public getAllCharacters(): Observable<Character[]> {
    return this.http
      .get(this.API_CHARACTERS)
      .pipe(map<any, Character[]>((data: any) => data.data.results));
  }
}
