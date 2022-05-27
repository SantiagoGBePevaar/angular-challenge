import { RouterModule, Routes } from '@angular/router';

import { CharactersComponent } from './components/characters/characters.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', component: CharactersComponent },
  { path: 'search/:searchTerm', component: CharactersComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
