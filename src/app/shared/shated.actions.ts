import { createAction, props } from '@ngrx/store';

export const SET_LOADING_ACTION = '[shated state] set loadng spinner';

export const setLoadingSpinner = createAction(
  SET_LOADING_ACTION,
  props<{ showLoading: boolean }>()
);
