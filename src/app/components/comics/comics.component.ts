import { LocalStorageService } from './../../services/local-storage.service';
import { ComicsService } from './../../services/comics.service';
import { Observable } from 'rxjs';
import { Component, OnInit, Inject, Input } from '@angular/core';

import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Comic } from 'src/app/models/comic';
import { Data } from 'src/app/models/shared_models';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css'],
})
export class ComicsComponent implements OnInit {
  favComic: Comic;
  existsFav: boolean = false;
  existsCart: boolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public comicData: Observable<Comic>,
    public dialog: MatDialog,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.comicData.subscribe((comic) => {
      this.favComic = comic;
      this.existsFav = this.localStorageService.existsFavorite(
        this.favComic.id
      );

      this.existsCart = this.localStorageService.existsCart(this.favComic.id);
    });

    this.localStorageService.comicFav$.subscribe((data) => {
      if (this.favComic?.id) {
        this.existsFav = !!data.find(
          (fav: Comic) => fav.id === this.favComic.id
        );
      }
    });

    this.localStorageService.comicCart$.subscribe((data) => {
      if (this.favComic?.id) {
        this.existsCart = !!data.find(
          (fav: Comic) => fav.id === this.favComic.id
        );
      }
    });
  }

  closeDialog() {
    this.dialog.closeAll();
  }

  addComicFavorites() {
    this.localStorageService.addOrRemoveFavorite(this.favComic);
  }

  addComicCart() {
    this.localStorageService.addOrRemoveCart(this.favComic);
  }
}
