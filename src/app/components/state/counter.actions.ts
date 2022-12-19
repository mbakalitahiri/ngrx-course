import { createAction, props } from '@ngrx/store';

export const increment = createAction('increment');
export const decrement = createAction('decrement');
export const reset = createAction('reset');
export const custom = createAction('custom', props<{ value: number }>());
export const developer = createAction(
  'developer',
  props<{ developer: string }>()
);
