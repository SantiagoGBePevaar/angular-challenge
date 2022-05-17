import { Observable, map } from 'rxjs';

import { Character } from './../models/character';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  private API_CHARACTERS =
    'https://gateway.marvel.com/v1/public/characters?apikey=9225180e569db9b51948ae2a84528c3e';
  constructor(private http: HttpClient) {}

  public getAllCharacters(): Observable<Character[]> {
    return this.http
      .get(this.API_CHARACTERS)
      .pipe(map<any, Character[]>((data: any) => data.data.results));
  }
}
