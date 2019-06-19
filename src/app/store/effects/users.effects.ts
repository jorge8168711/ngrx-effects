import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { GET_USERS, GetUsersSuccess, GetUsersFail } from '../actions';
import { map, switchMap, catchError, take } from 'rxjs/operators';
import { User } from 'src/app/models';
import { UsersService } from 'src/app/services';
import { of } from 'rxjs';

@Injectable()
export class UsersEffects {

  @Effect()
  uploadUsers$ = this.actions$.pipe(
    ofType(GET_USERS),
    switchMap(() => this.users.get().pipe(
      take(1),
      map( (users: User[]) => {
        return new GetUsersSuccess(users);
      }),
      catchError(err => {
        return of(new GetUsersFail(err));
      })
    ))
  );

  constructor(private actions$: Actions, private users: UsersService) {}
}
