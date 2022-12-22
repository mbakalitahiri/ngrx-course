import { AUTH_STATE_NAME } from './../auth/login/state/auth.selectors';
import { AuthState } from './../auth/login/state/auth.state';
import { SHARED_STATE_NAME } from '../shared/shared.selectors';
import { authReducer } from '../auth/login/state/auth.reducer';
import { sharedReducer } from '../shared/shared.reducer';
import { sharedState } from '../shared/shaed.state';

export interface appState {
  [SHARED_STATE_NAME]: sharedState;
  [AUTH_STATE_NAME]: AuthState;
}

export const appReducer = {
  [SHARED_STATE_NAME]: sharedReducer,
  [AUTH_STATE_NAME]: authReducer,
};

//! Si manana tenemos un nuevo state lo pondremos aqui
