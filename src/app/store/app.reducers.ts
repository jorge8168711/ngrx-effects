import { UsersState, usersReducer } from './reducers';
import { ActionReducerMap } from '@ngrx/store';
import { UiState, uiReducer } from './reducers/ui.reducers';

export interface AppState {
  users: UsersState;
  ui: UiState;
}

export const appReducers: ActionReducerMap<AppState> = {
  users: usersReducer,
  ui: uiReducer
};
