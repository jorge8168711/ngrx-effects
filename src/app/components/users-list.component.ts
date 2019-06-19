import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppState } from '../store/app.reducers';
import { Store } from '@ngrx/store';
import { GetUsers } from '../store/actions';
import { filter } from 'rxjs/operators';
import { UsersState } from '../store/reducers';

@Component({
  selector: 'app-users-list',
  template: /*html*/ `
    <h1>Users</h1>

    <p *ngIf="(usersState$ | async).loading; else notLoading">loading...</p>

    <pre *ngIf="(usersState$ | async).error as error">
      {{ error | json }}
    </pre>

    <ng-template #notLoading>
      <app-user [userData]="user"
        *ngFor="let user of (usersState$ | async)?.users || []; trackBy: trackByFn">
      </app-user>
    </ng-template>
  `
})
export class UsersListComponent implements OnInit {
  public usersState$: Observable<UsersState>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(new GetUsers());

    this.usersState$ = this.store.select('users');
  }

  public trackByFn(index, item) {
    return item.id;
 }
}
