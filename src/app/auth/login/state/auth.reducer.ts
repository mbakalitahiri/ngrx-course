import { createReducer, on } from '@ngrx/store';

import { initialState } from './auth.state';
import { loginSuccess } from './auth.actions';

export const _authReducer = createReducer(
  initialState,
  on(loginSuccess, (state, action) => {
    console.log('dentro del reducer', action.user);
    return {
      ...state,
      user: action.user,
    };
  })
);

export function authReducer(state: any, action: any) {
  return _authReducer(state, action);
}
