import { createAction, props } from '@ngrx/store';

import { User } from '../../models/user.model';

//!login
export const LOGIN_START = '[auth page] login start';
export const LOGIN_SUCCESS = '[auth page] login success';
export const LOGIN_FAIL = '[auth page] login fail';

export const loginStart = createAction(
  LOGIN_START,
  props<{ email: string; password: string }>()
);
export const loginSuccess = createAction(
  LOGIN_SUCCESS,
  props<{ user: User | any; redirect: boolean }>()
);
export const loginFail = createAction(LOGIN_FAIL, props<{ id: number }>());

//! Logout
export const LOGOUT = '[auth page] logout';
export const logout = createAction(LOGOUT);

//!signup
export const SIGNUP_START = '[auth page] sigup start';
export const SIGNUP_SUCCESS = '[auth page] sigup success';

export const signupStart = createAction(
  SIGNUP_START,
  props<{ email: string; password: string }>()
);
export const signupSuccess = createAction(
  SIGNUP_SUCCESS,
  props<{ user: User }>()
);

//! auto login
export const AUTO_LOGIN_START = '[auth page] auto login start';
export const autoLoginStart = createAction(AUTO_LOGIN_START);
