import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersService } from '../services';

@Component({
  selector: 'app-users-list',
  template: /*html*/ `
    <h1>Users</h1>
    <!-- <pre>{{ users$ | async | json }}</pre> -->

    <app-user *ngFor="let user of (this.users$ | async).data || []"
      [userData]="user">
    </app-user>
  `,
  styles: [ /*css*/ `
    .title { color: tomato; }
  `]
})
export class UsersListComponent implements OnInit {
  public users$: Observable<any>;

  constructor(public users: UsersService) {}

  ngOnInit(): void {
    this.users$ = this.users.get();
  }
}
