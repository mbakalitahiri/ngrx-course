import { createReducer, on } from '@ngrx/store';
import {
  custom,
  decrement,
  developer,
  increment,
  reset,
} from './counter.actions';
import { initialState } from './counter.state';

export const counterReducer = createReducer(
  initialState,

  on(increment, (state) => {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }),

  on(decrement, (state) => {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }),
  on(reset, (state) => {
    let value = 0;
    return {
      ...state,
      counter: +state.counter * 0,
    };
  }),
  on(custom, (state, action) => {
    console.log(action);
    return {
      ...state,
      counter: +(state.counter + action.value),
    };
  }),
  on(developer, (state, action) => {
    console.log('estoy en al accion developer', action);
    return {
      ...state,
      developer: action.developer,
    };
  })
);
