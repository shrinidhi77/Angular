// src/app/store/reducers/counter.reducer.ts
import { Action, createReducer, on } from '@ngrx/store';
import { increment, decrement, reset, setCounter } from '../actions/counter.actions';
import { CounterState } from '../model/counter.model';

export const initialState: CounterState = { counter: 0 };

const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => ({ ...state, counter: state.counter + 1 })),
  on(decrement, (state) => ({ ...state, counter: state.counter - 1 })),
  on(reset, (state) => ({ ...state, counter: 0 })),
  on(setCounter, (state, { value }) => ({ ...state, counter: value }))
);

export function counterReducer(state: CounterState | undefined, action: Action) {
  return _counterReducer(state, action);
}
