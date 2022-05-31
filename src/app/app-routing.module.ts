import { RouterModule, Routes } from '@angular/router';

import { CharacterDetailComponent } from './components/characters/character-detail/character-detail.component';
import { CharactersComponent } from './components/characters/characters.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', component: CharactersComponent },
  { path: 'search/:searchTerm', component: CharactersComponent },
  { path: 'detail', component: CharacterDetailComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
