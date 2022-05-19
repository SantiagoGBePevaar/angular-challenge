import { Component, OnInit } from '@angular/core';

import { Comic } from './../../models/comic';
import { ComicsService } from './../../services/comics.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
})
export class FavoritesComponent implements OnInit {
  favorites: Observable<Comic[]>;

  constructor(private comicsService: ComicsService) {}

  ngOnInit(): void {
    this.getComics();
  }

  getComics() {
    this.favorites = this.comicsService.getComics();
  }
}
