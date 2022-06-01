import { Component, OnInit } from '@angular/core';

import { LocalStorageService } from './../../services/local-storage.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
})
export class FavoritesComponent implements OnInit {
  comicFav$ = this.localStorageService.comicFav$;

  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit(): void {
    this.localStorageService.getFavoritesComics();
    this.comicFav$ = this.localStorageService.comicFav$;
  }
}
