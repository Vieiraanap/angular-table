import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-table';

  constructor(
    private router: Router
  ) {}

  redirectTablePerson() {
    this.router.navigate(['table/person']);
  }

  redirectTableFirm() {
    this.router.navigate(['table/firm']);
  }

  redirectTableProduct() {
    this.router.navigate(['table/product']);
  }
}
