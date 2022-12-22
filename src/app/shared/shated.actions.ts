import { createAction, props } from '@ngrx/store';

export const SET_LOADING_ACTION = '[shared state] set loadng spinner';
export const SERT_ERROR_MESSAGE = '[shared state] set error message';

export const setLoadingSpinner = createAction(
  SET_LOADING_ACTION,
  props<{ showLoading: boolean }>()
);

export const setErrorMessage = createAction(
  SERT_ERROR_MESSAGE,
  props<{ errorMessage: string }>()
);
