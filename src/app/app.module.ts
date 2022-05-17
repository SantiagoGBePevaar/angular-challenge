import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CharactersComponent } from './components/characters/characters.component';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { CharacterCardComponent } from './components/characters/character-card/character-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SearchBarComponent,
    CharactersComponent,
    CharacterCardComponent,
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
