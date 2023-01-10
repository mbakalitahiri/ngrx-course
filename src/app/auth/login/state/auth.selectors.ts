import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AuthState } from './auth.state';

export const AUTH_STATE_NAME = 'auth';

export const getAuthState = createFeatureSelector<AuthState>(AUTH_STATE_NAME);

export const isAuthenticated = createSelector(getAuthState, (state) => {
  return state.user ? true : false;
});

export const getAuth = createSelector(getAuthState, (state) => {
  return state;
});

export const getToken = createSelector(getAuthState, (state) => {
  console.log(state.user);
  return state.user?.getToken();
});
