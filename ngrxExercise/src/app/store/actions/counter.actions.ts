// src/app/store/actions/counter.actions.ts
import { createAction, props } from '@ngrx/store';

export const increment = createAction('[Counter] Increment');
export const decrement = createAction('[Counter] Decrement');
export const reset = createAction('[Counter] Reset');
export const setCounter = createAction(
  '[Counter] Set Counter',
  props<{ value: number }>() // Payload for action
);
