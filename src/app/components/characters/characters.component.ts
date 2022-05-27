import { Character, CharacterData } from './../../models/character';
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { CharactersService } from 'src/app/services/characters.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent implements OnInit {
  characters: Observable<CharacterData>;
  page: number = 1;
  searchTerm: string = '';
  filter: string = '';

  get offSet() {
    return this.page > 1 ? (this.page - 1) * 10 : 0;
  }

  constructor(
    private characterService: CharactersService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      if (params['page']) this.page = params['page'];
      if (params['filter']) this.filter = params['filter'];
      this.getData();
    });

    this.route.params.subscribe((params) => {
      if (params['searchTerm']) this.searchTerm = params['searchTerm'];
      this.getData();
    });
  }

  getData() {
    if (this.searchTerm) this.getCharactersByName(this.searchTerm);
    else this.getCharacters();
  }

  getCharacters() {
    this.characters = this.characterService.getCharacters(
      this.offSet,
      this.filter
    );
  }

  getCharactersByName(name: string) {
    this.characters = this.characterService.getCharactersByName(
      name,
      this.offSet,
      this.filter
    );
  }
}
