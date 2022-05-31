import { Component, OnInit } from '@angular/core';

import { Character } from './../../../models/character';
import { CharacterService } from 'src/app/services/character.service';
import { Comic } from 'src/app/models/comic';
import { Event } from 'src/app/models/event';
import { Serie } from 'src/app/models/series';
import { Story } from 'src/app/models/story';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css'],
})
export class CharacterDetailComponent implements OnInit {
  character: Character;
  comics: Comic[];
  stories: Story[];
  events: Event[];
  series: Serie[];

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.character = this.characterService.character;
    this.comics = this.characterService.comics;
    this.stories = this.characterService.stories;
    this.events = this.characterService.events;
    this.series = this.characterService.series;
  }

  filterComics() {
    return this.comics.filter((comic) => comic.images.length > 0);
  }

  filterStories() {
    return this.stories.filter((story) => story.thumbnail);
  }

  filterEvents() {
    return this.events.filter((event) => event.thumbnail);
  }

  filterSeries() {
    return this.series.filter((serie) => serie.thumbnail);
  }
}
