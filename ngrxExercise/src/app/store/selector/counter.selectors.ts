// src/app/store/selectors/counter.selectors.ts
import { createSelector } from '@ngrx/store';
import { CounterState } from '../model/counter.model';

// Select the counterState slice from the root state
export const selectCounterState = (state: { counterState: CounterState }) => state.counterState;

// Create a selector to retrieve the counter value from counterState
export const selectCounterValue = createSelector(
  selectCounterState,
  (state: CounterState) => state.counter
);
