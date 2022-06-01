import { BehaviorSubject } from 'rxjs';
import { Comic } from '../models/comic';
import { Injectable } from '@angular/core';

const FAVORITES: string = 'favorites';
const CART: string = 'cart';
@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private favComicSubject = new BehaviorSubject<Comic[]>([]);
  comicFav$ = this.favComicSubject.asObservable();

  private cartComicSubject = new BehaviorSubject<Comic[]>([]);
  comicCart$ = this.cartComicSubject.asObservable();

  constructor() {
    this.initialStorage();
  }
  //FAVORITES
  existsFavorite(id: number): boolean {
    const currentFav = this.getFavoritesComics();
    return !!currentFav.find((fav: Comic) => fav.id === id);
  }
  addOrRemoveFavorite(comic: Comic): void {
    const { id } = comic;
    const found = this.existsFavorite(id);
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

  //CART
  existsCart(id: number): boolean {
    const currentFav = this.getCartComics();
    return !!currentFav.find((fav: Comic) => fav.id === id);
  }

  addOrRemoveCart(comic: Comic): void {
    const { id } = comic;
    const currentCart = this.getCartComics();
    const found = !!currentCart.find((item: Comic) => item.id === id);
    found ? this.removeFromCart(id) : this.addToCart(comic);
  }
  private addToCart(comic: Comic): void {
    const currentCart = this.getCartComics();
    localStorage.setItem(CART, JSON.stringify([...currentCart, comic]));
    this.cartComicSubject.next([...currentCart, comic]);
  }
  private removeFromCart(id: number): void {
    const currentCart = this.getCartComics();
    const comics = currentCart.filter((item: Comic) => item.id !== id);
    localStorage.setItem(CART, JSON.stringify([...comics]));
    this.cartComicSubject.next([...comics]);
  }

  getCartComics() {
    const comicCart = JSON.parse(localStorage.getItem(CART)!);
    this.cartComicSubject.next(comicCart);
    return comicCart;
  }

  private initialStorage() {
    const currents = JSON.parse(localStorage.getItem(FAVORITES)!);
    const cart = JSON.parse(localStorage.getItem(CART)!);
    if (!currents) localStorage.setItem(FAVORITES, JSON.stringify([]));
    if (!cart) localStorage.setItem(CART, JSON.stringify([]));
  }
}
