import { createReducer, on } from '@ngrx/store';

import { initialState } from './shaed.state';
import { setLoadingSpinner } from './shated.actions';

export const _sharedReducer = createReducer(
  initialState,

  on(setLoadingSpinner, (state, action) => {
    return {
      ...state,
      showLoading: action.showLoading,
    };
  })
);
export function sharedReducer(state: any, action: any) {
  return _sharedReducer(state, action);
}
