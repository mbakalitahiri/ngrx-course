import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.state';

export const AUTH_STATE_NAME = 'auth';

export const getAuthState = createFeatureSelector<AuthState>('auth');

export const getAuth = createSelector(getAuthState, (state) => {
  return state;
});
