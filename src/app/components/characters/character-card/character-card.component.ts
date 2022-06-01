import { Router } from '@angular/router';
import { Story } from './../../../models/story';
import { Component, Inject, Input, OnInit, ViewChild } from '@angular/core';

import { Character } from './../../../models/character';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StoriesService } from 'src/app/services/stories.service';
import { Observable } from 'rxjs';
import { ComicsComponent } from '../../comics/comics.component';
import { Data } from 'src/app/models/shared_models';
import { CharacterService } from 'src/app/services/character.service';
import { ComicsService } from 'src/app/services/comics.service';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css'],
})
export class CharacterCardComponent implements OnInit {
  @Input() character!: Character;
  constructor(public dialog: MatDialog, private comicService: ComicsService) {}

  ngOnInit(): void {}
  openDialog() {
    this.dialog.open(CharacterDetail, {
      data: this.character,
    });
  }

  async openComic(comic: Data) {
    let comicData = this.comicService.getComic(comic.resourceURI);
    this.dialog.open(ComicsComponent, {
      data: comicData,
    });
  }
}

@Component({
  selector: 'character-detail',
  templateUrl: 'character-detail.html',
  styleUrls: ['./character-card.component.css'],
})
export class CharacterDetail {
  story: Observable<Story>;
  @ViewChild('storyContent') content: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public character: Character,
    private storiesService: StoriesService,
    public dialog: MatDialog,
    private characterService: CharacterService,
    private router: Router
  ) {}

  async loadStory(resourceURI: string) {
    this.content.nativeElement.style.maxHeight = '0px';
    await new Promise((f) => setTimeout(f, 800));
    this.story = this.storiesService.getStory(resourceURI);
    await new Promise((f) => setTimeout(f, 500));
    this.content.nativeElement.style.maxHeight = '500px';
  }

  closeDialog() {
    this.dialog.closeAll();
  }

  async giveDetail() {
    this.closeDialog();
    this.characterService.character = this.character;
    this.characterService.getCharacterInfo();
    await new Promise((f) => setTimeout(f, 1000));
    this.router.navigate(['detail']);
  }
}
