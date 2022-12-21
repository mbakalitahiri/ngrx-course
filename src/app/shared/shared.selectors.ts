import { createFeatureSelector, createSelector } from '@ngrx/store';
import { sharedState } from './shaed.state';

// export const getSharedState = createFeatureSelector<sharedState>('showloading');
export const SHARED_STATE_NAME = 'shared';
export const getSharedState =
  createFeatureSelector<sharedState>(SHARED_STATE_NAME);

export const getLoading = createSelector(getSharedState, (state) => {
  return state.showLoading;
});
