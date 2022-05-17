import { Component, OnInit } from '@angular/core';

import { Character } from './../../models/character';
import { CharactersService } from 'src/app/services/characters.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent implements OnInit {
  characters: Observable<Character[]>;

  constructor(private characterService: CharactersService) {}
  ngOnInit(): void {
    this.getAllCharacters();
  }

  getAllCharacters() {
    this.characters = this.characterService.getAllCharacters();
  }
}
