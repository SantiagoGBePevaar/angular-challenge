import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
})
export class DropdownComponent implements OnInit {
  open: boolean = false;
  searchTerm: string = '';
  options: string[] = ['name', 'modified', '-name', '-modified'];

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['searchTerm']) this.searchTerm = params['searchTerm'];
    });
  }

  openMenu(value?: boolean) {
    if (value) this.open = value;
    else this.open = !this.open;
  }

  filterOptions(filterOptions: string) {
    let url = this.searchTerm ? `/search/${this.searchTerm}` : '';
    this.router.navigate([url], {
      queryParams: { filter: filterOptions },
      queryParamsHandling: 'merge',
    });
    this.open = false;
  }
}
