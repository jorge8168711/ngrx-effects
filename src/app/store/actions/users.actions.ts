import { Action } from '@ngrx/store';
import { User } from 'src/app/models';

export const GET_USERS = '[Users] get users initialized';
export const GET_USERS_SUCCESS = '[Users] get users success';
export const GET_USERS_FAIL = '[Users] get users fail';

export class GetUsers implements Action {
  readonly type = GET_USERS;
}
export class GetUsersSuccess implements Action {
  readonly type = GET_USERS_SUCCESS;
  constructor(public users: User[]) {}
}
export class GetUsersFail implements Action {
  readonly type = GET_USERS_FAIL;
  constructor(public payload: any) {}
}

export type UsersActions = GetUsers
  | GetUsersFail
  | GetUsersSuccess;
