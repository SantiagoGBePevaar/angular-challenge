import { Component, Input, OnInit } from '@angular/core';

import { Comic } from './../../../models/comic';

@Component({
  selector: 'app-favorites-card',
  templateUrl: './favorites-card.component.html',
  styleUrls: ['./favorites-card.component.css'],
})
export class FavoritesCardComponent implements OnInit {
  @Input() favorite!: Comic;

  constructor() {}

  ngOnInit(): void {}
}
