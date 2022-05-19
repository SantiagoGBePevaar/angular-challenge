import {
  CharacterCardComponent,
  CharacterDetail,
} from './components/characters/character-card/character-card.component';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CharactersComponent } from './components/characters/characters.component';
import { FavoritesCardComponent } from './components/favorites/favorites-card/favorites-card.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { SearchBarComponent } from './components/shared/search-bar/search-bar.component';
import { ToolbarComponent } from './components/shared/toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SearchBarComponent,
    CharactersComponent,
    FavoritesComponent,
    CharacterCardComponent,
    FavoritesCardComponent,
    CharacterDetail,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatDialogModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
