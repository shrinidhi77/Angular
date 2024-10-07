// src/app/counter/counter.component.ts
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCounterValue } from '../store/selector/counter.selectors';
import { CounterState } from '../store/model/counter.model'; // Import your model
import { increment, decrement, reset } from '../store/actions/counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
})
export class CounterComponent {
  counter$: Observable<number>;

  constructor(private store: Store<{ counterState: CounterState }>) {  // Type the store correctly
    this.counter$ = this.store.select(selectCounterValue);  // Access the counter value via the selector
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }

}
