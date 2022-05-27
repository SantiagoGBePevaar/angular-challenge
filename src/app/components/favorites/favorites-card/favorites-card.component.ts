import { Component, Input, OnInit } from '@angular/core';

import { Comic } from './../../../models/comic';
import { LocalStorageService } from './../../../services/local-storage.service';

@Component({
  selector: 'app-favorites-card',
  templateUrl: './favorites-card.component.html',
  styleUrls: ['./favorites-card.component.css'],
})
export class FavoritesCardComponent implements OnInit {
  @Input() favorite!: Comic;

  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit(): void {}

  removeFavorite() {
    this.localStorageService.addOrRemoveFavorite(this.favorite);
  }
}
