import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { GET_USER, GetUser, GetUserSuccess, GetUserFail } from '../actions';
import { map, switchMap, catchError, take } from 'rxjs/operators';
import { User } from 'src/app/models';
import { UsersService } from 'src/app/services';
import { of } from 'rxjs';

@Injectable()
export class UserEffects {
  @Effect()
  getUser$ = this.actions$.pipe(
    ofType(GET_USER),
    switchMap((action: GetUser) => this.users.getById(action.id).pipe(
      take(1),
      map( (user: User) => {
        return new GetUserSuccess(user);
      }),
      catchError(err => {
        return of(new GetUserFail(err));
      })
    ))
  );

  constructor(private actions$: Actions, private users: UsersService) {}
}
