import * as fromUi from '../actions/ui.actions';

export interface UiState {
  appIsLoading: boolean;
}

const initialState: UiState = {
  appIsLoading: false
};

export function uiReducer(state = initialState, action: fromUi.uiActions ): UiState {
  switch (action.type) {
    case fromUi.ACTIVATE_LOADING:
      return { appIsLoading: true };

    case fromUi.INACTIVATE_LOADING:
      return { appIsLoading: false };

    default:
      return state;
  }
}
