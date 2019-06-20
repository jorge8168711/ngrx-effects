import { Action } from '@ngrx/store';

export const ACTIVATE_LOADING = 'ACTIVATE_LOADING';
export const INACTIVATE_LOADING = 'INACTIVATE_LOADING';

export class ActivateLoading implements Action {
  readonly type = ACTIVATE_LOADING;
  constructor() { }
}
export class InactivateLoading implements Action {
  readonly type = INACTIVATE_LOADING;
  constructor() { }
}

export type uiActions = ActivateLoading | InactivateLoading;
