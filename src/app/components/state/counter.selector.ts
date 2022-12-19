import { CounterState } from './counter.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getCounterState = createFeatureSelector<CounterState>('counter');

export const getCounter = createSelector(getCounterState, (state) => {
  return state.counter;
});

export const getDeveloperState =
  createFeatureSelector<CounterState>('developer');

export const getDeveloper = createSelector(getCounterState, (state) => {
  return state.developer;
});
