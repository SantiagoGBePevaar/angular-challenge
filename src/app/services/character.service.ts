import { Character } from './../models/character';
import { Comic } from '../models/comic';
import { Event } from '../models/event';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Serie } from '../models/series';
import { Story } from '../models/story';
import { getResourceURI } from './utils-service';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private URI_CHARACTERS =
    'https://gateway.marvel.com:443/v1/public/characters';

  public character: Character;

  public comics: Comic[];
  public stories: Story[];
  public events: Event[];
  public series: Serie[];

  constructor(private http: HttpClient) {}

  public getCharacterInfo() {
    this.getComics();
    this.getStories();
    this.getEvents();
    this.getSeries();
  }

  private getURI(element: string) {
    return getResourceURI(
      `${this.URI_CHARACTERS}/${this.character.id}/${element}`
    );
  }

  public getComics() {
    this.http.get(this.getURI('comics')).subscribe((data: any) => {
      this.comics = data['data']['results'];
    });
  }

  public getStories() {
    this.http.get(this.getURI('stories')).subscribe((data: any) => {
      this.stories = data['data']['results'];
    });
  }

  public getEvents() {
    this.http.get(this.getURI('events')).subscribe((data: any) => {
      this.events = data['data']['results'];
    });
  }

  public getSeries() {
    this.http.get(this.getURI('series')).subscribe((data: any) => {
      this.series = data['data']['results'];
    });
  }
}
