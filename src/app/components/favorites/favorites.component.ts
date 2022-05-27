import { Component, OnInit } from '@angular/core';

import { Comic } from './../../models/comic';
import { ComicsService } from './../../services/comics.service';
import { LocalStorageService } from './../../services/local-storage.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
})
export class FavoritesComponent implements OnInit {
  favorites: Observable<Comic[]>;
  comicFav$ = this.localStorageService.comicFav$;

  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit(): void {
    this.localStorageService.getFavoritesComics();
    this.comicFav$ = this.localStorageService.comicFav$;
  }
}
