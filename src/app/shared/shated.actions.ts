import { createAction, props } from '@ngrx/store';

export const SET_LOADING_ACTION = '[shated state] set loadng spinner';
export const SERT_ERROR_MESSAGE = '[shated state] set error message';

export const setLoadingSpinner = createAction(
  SET_LOADING_ACTION,
  props<{ showLoading: boolean }>()
);

export const setErrorMessage = createAction(
  SERT_ERROR_MESSAGE,
  props<{ errorMessage: string }>()
);
