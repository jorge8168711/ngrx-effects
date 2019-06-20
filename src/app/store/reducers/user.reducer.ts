import { User } from 'src/app/models';
import * as fromUser from '../actions/user.actions';

export interface UserState {
  user: User;
  loaded: boolean;
  loading: boolean;
  error: any;
}

const initialState: UserState = {
  user: null,
  loaded: false,
  loading: false,
  error: null
};

export function userReducer(
  state: UserState = initialState,
  action: fromUser.UserActions): UserState {
  switch (action.type) {
    case fromUser.GET_USER:
      return {
        ...state,
        loading: true,
        error: null,
        user: null
      };

    case fromUser.GET_USER_SUCCESS:
      return {
        ...state,
        loaded: true,
        loading: false,
        user: {...action.user } as User
      };

    case fromUser.GET_USER_FAIL:
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
