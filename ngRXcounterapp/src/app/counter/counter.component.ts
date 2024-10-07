import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset, multiply } from '../Store/actions/counter.action';
import * as fromRoot from '../Store/selectors/counter.selector';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  count$: Observable<any> | undefined;

  constructor(private store: Store<fromRoot.AppState>) {
  }

  ngOnInit(): void {
    this.count$ = this.store.pipe(select(fromRoot.selectFeatureCount))
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

  multiplyByTwo() {
    this.store.dispatch(multiply({ multiplyBy: 2 }))
  }

  multiplyByThree() {
    this.store.dispatch(multiply({ multiplyBy: 3 }))
  }
}
