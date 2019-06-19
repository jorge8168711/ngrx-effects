import { User } from 'src/app/models';
import * as fromUsers from '../actions';

export interface UsersState {
  users: User[];
  loaded: boolean;
  loading: boolean;
  error: any;
}

const initialState: UsersState = {
  users: [],
  loaded: false,
  loading: false,
  error: null
};

export function usersReducer(
  state: UsersState = initialState,
  action: fromUsers.UsersActions): UsersState {
  switch (action.type) {
    case fromUsers.GET_USERS:
      return {
        ...state,
        loading: true,
        error: null
      };

    case fromUsers.GET_USERS_SUCCESS:
      return {
        ...state,
        loaded: true,
        loading: false,
        users: [...action.users]
      };

    case fromUsers.GET_USERS_FAIL:
      return {
        ...state,
        loaded: false,
        loading: false,
        error: {
          status: action.payload.status,
          message: action.payload.message,
          url: action.payload.url
        }
      };

    default:
      return state;
  }
}
