import { sharedState } from '../shared/shaed.state';
import { sharedReducer } from '../shared/shared.reducer';
import { SHARED_STATE_NAME } from '../shared/shared.selectors';

export interface appState {
  [SHARED_STATE_NAME]: sharedState;
}

export const appReducer = {
  [SHARED_STATE_NAME]: sharedReducer,
};

//! Si manana tenemos un nuevo state lo pondremos aqui
