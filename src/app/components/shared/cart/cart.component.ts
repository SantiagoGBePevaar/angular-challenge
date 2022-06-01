import { Component, OnInit } from '@angular/core';

import { Comic } from './../../../models/comic';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  comicCart$ = this.localStorageService.comicCart$;
  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit(): void {
    this.localStorageService.getCartComics();
    this.comicCart$ = this.localStorageService.comicCart$;
  }

  removeItemCart(comic: Comic) {
    this.localStorageService.addOrRemoveCart(comic);
  }
}
