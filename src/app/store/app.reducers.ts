import { UsersState, usersReducer, UserState, userReducer } from './reducers';
import { ActionReducerMap } from '@ngrx/store';
import { UiState, uiReducer } from './reducers/ui.reducer';

export interface AppState {
  users: UsersState;
  user: UserState;
  ui: UiState;
}

export const appReducers: ActionReducerMap<AppState> = {
  users: usersReducer,
  user: userReducer,
  ui: uiReducer
};
