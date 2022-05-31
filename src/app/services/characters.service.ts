import { Character, CharacterData } from './../models/character';
import { Observable, map } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getResourceURIWithParams } from './utils-service';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  private URI_CHARACTERS =
    'https://gateway.marvel.com:443/v1/public/characters';
  constructor(private http: HttpClient) {}

  public getCharacters(
    offset: number,
    filter: string
  ): Observable<CharacterData> {
    const uri = getResourceURIWithParams(
      `${this.URI_CHARACTERS}?limit=10&offset=${offset}&orderBy=${filter}`
    );
    return this.http
      .get(uri)
      .pipe(map<any, CharacterData>((data: any) => data.data));
  }

  public getCharactersByName(
    name: string,
    offset: number,
    filter: string
  ): Observable<CharacterData> {
    const uri = getResourceURIWithParams(
      `${this.URI_CHARACTERS}?limit=10&nameStartsWith=${name}&offset=${offset}&orderBy=${filter}`
    );
    return this.http
      .get(uri)
      .pipe(map<any, CharacterData>((data: any) => data.data));
  }
}
