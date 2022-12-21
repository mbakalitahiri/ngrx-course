import { createReducer, on } from '@ngrx/store';

import { initialState } from './shaed.state';
import { setErrorMessage, setLoadingSpinner } from './shated.actions';

export const _sharedReducer = createReducer(
  initialState,

  on(setLoadingSpinner, (state, action) => {
    return {
      ...state,
      showLoading: action.showLoading,
    };
  }),
  on(setErrorMessage, (state, action) => {
    console.log(action.errorMessage);
    return {
      ...state,
      errorMessage: action.errorMessage,
    };
  })
);
export function sharedReducer(state: any, action: any) {
  return _sharedReducer(state, action);
}
