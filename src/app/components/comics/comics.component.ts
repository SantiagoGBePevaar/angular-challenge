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
  comic: Observable<Comic>;

  constructor(
    @Inject(MAT_DIALOG_DATA) public comicData: Data,
    private comicsService: ComicsService,
    public dialog: MatDialog
  ) {
    this.loadStory(comicData.resourceURI);
  }

  ngOnInit(): void {}

  async loadStory(resourceURI: string) {
    this.comic = this.comicsService.getComic(resourceURI);
  }

  closeDialog() {
    this.dialog.closeAll();
  }
}