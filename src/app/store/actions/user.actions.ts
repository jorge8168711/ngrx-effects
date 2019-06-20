import { Action } from '@ngrx/store';
import { User } from 'src/app/models';

export const GET_USER = '[User] get user initialized';
export const GET_USER_SUCCESS = '[User] get user success';
export const GET_USER_FAIL = '[User] get user fail';

export class GetUser implements Action {
  readonly type = GET_USER;
  constructor(public id: number) {}
}
export class GetUserSuccess implements Action {
  readonly type = GET_USER_SUCCESS;
  constructor(public user: User) {}
}
export class GetUserFail implements Action {
  readonly type = GET_USER_FAIL;
  constructor(public payload: any) {}
}

export type UserActions = GetUser | GetUserFail | GetUserSuccess;
