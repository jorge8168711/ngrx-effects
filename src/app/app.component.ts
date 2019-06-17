import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: /*html*/ `
    <!-- <h1> Welcome to {{ title }}!</h1> -->
    <app-sidenav></app-sidenav>
  `
})
export class AppComponent {
  public title = 'ngrx-effects';
}
