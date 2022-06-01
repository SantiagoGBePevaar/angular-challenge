import {
  CharacterCardComponent,
  CharacterDetail,
} from './components/characters/character-card/character-card.component';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CharacterDetailComponent } from './components/characters/character-detail/character-detail.component';
import { CharactersComponent } from './components/characters/characters.component';
import { ComicsComponent } from './components/comics/comics.component';
import { DropdownComponent } from './components/shared/dropdown/dropdown.component';
import { FavoritesCardComponent } from './components/favorites/favorites-card/favorites-card.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { PaginationComponent } from './components/characters/pagination/pagination.component';
import { SearchBarComponent } from './components/shared/search-bar/search-bar.component';
import { ToolbarComponent } from './components/shared/toolbar/toolbar.component';
import { CartComponent } from './components/shared/cart/cart.component';

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
    ComicsComponent,
    PaginationComponent,
    DropdownComponent,
    CharacterDetailComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatDialogModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    MatProgressSpinnerModule,
    IvyCarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
