import { BehaviorSubject } from 'rxjs';
import { Comic } from '../models/comic';
import { Injectable } from '@angular/core';

const FAVORITES: string = 'favorites';
@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private favComicSubject = new BehaviorSubject<Comic[]>([]);
  comicFav$ = this.favComicSubject.asObservable();

  constructor() {
    this.initialStorage();
  }

  addOrRemoveFavorite(comic: Comic): void {
    const { id } = comic;
    const currentFav = this.getFavoritesComics();
    const found = !!currentFav.find((fav: Comic) => fav.id === id);
    found ? this.removeFromFavorite(id) : this.addToFavorite(comic);
  }
  private addToFavorite(comic: Comic): void {
    const currentFav = this.getFavoritesComics();
    localStorage.setItem(FAVORITES, JSON.stringify([...currentFav, comic]));
    this.favComicSubject.next([...currentFav, comic]);
  }
  private removeFromFavorite(id: number): void {
    const currentFav = this.getFavoritesComics();
    const comics = currentFav.filter((item: Comic) => item.id !== id);
    localStorage.setItem(FAVORITES, JSON.stringify([...comics]));
    this.favComicSubject.next([...comics]);
  }

  getFavoritesComics() {
    const comicFav = JSON.parse(localStorage.getItem(FAVORITES)!);
    this.favComicSubject.next(comicFav);
    return comicFav;
  }

  private initialStorage() {
    const currents = JSON.parse(localStorage.getItem(FAVORITES)!);
    if (!currents) localStorage.setItem(FAVORITES, JSON.stringify([]));
  }
}
