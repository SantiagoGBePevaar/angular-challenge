import { Component, OnInit } from '@angular/core';

import { CartComponent } from '../cart/cart.component';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {
  items: number;

  constructor(
    private router: Router,
    public dialog: MatDialog,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.localStorageService.getCartComics();
    this.localStorageService.comicCart$.subscribe(
      (data) => (this.items = data.length)
    );
  }

  goHomePage() {
    this.router.navigateByUrl('');
  }

  openCart() {
    this.dialog.open(CartComponent);
  }
}
