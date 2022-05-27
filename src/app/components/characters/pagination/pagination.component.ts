import { ActivatedRoute, Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

import { CharacterData } from 'src/app/models/character';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit {
  @Input() characterData: Observable<CharacterData>;
  page: number = 1;
  total: number;
  items: number[] = [];
  paginationItems: number[];
  searchTerm: string = '';

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      if (params['page']) this.page = params['page'];
      this.calculate();
    });

    this.route.params.subscribe((params) => {
      if (params['searchTerm']) this.searchTerm = params['searchTerm'];
    });

    this.characterData.subscribe((data) => {
      this.total = Math.ceil(data.total / 10);
      this.items = [...Array(this.total).keys()];
      this.calculate();
    });

    this.calculate();
  }

  calculate() {
    let n = +this.page;
    let m = +this.page + 5;
    this.paginationItems =
      +this.page == 1
        ? this.items.slice(n - 1, m + 1)
        : this.items.slice(n - 1, m);
  }

  getNewPage(newPage: number) {
    let url = this.searchTerm ? `/search/${this.searchTerm}` : '';
    this.router.navigate([url], {
      queryParams: { page: newPage + 1 },
      queryParamsHandling: 'merge',
    });
  }
}
