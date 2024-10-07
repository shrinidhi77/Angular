import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { concat } from 'rxjs/operators';
import { merge } from 'rxjs/operators';

@Component({
  selector: 'app-combination-operator',
  templateUrl: './combination-operator.component.html',
  styleUrl: './combination-operator.component.css'
})
export class CombinationOperatorComponent {

  constructor() {
    console.log("-------------------concat() operator -----------------------")
    let observable1 = of(10, 20, 30);
    let observable2 = of(true, false);
    let observable3 = of("hello", "world");
    let newobservable1 = observable1.pipe(concat(observable2, observable3))
    newobservable1.subscribe(
      data => console.log("Received value", data),
      error => console.log("error", error),
      () => console.log("data stream completed")
    );

    let observable4 = new Observable(observer => {
      observer.next(10);
      observer.next(20);
      observer.complete();
    });
    let observable5 = new Observable(observer => {
      observer.next(true);
      observer.error(false);
    });
    let observable6 = new Observable(observer => {
      observer.next("hello");
    });
    let newobservable2 = observable4.pipe(concat(observable5, observable6));
    newobservable2.subscribe(
      data => console.log("Received value", data),
      error => console.log("error", error),
      () => console.log("data stream completed")
    );


    console.log("------------------ merge() operator --------------------------")

    let observable7 = new Observable(observer => {
      setTimeout(() => observer.next(10), 1000);
      setTimeout(() => observer.next(20), 1500);
      setTimeout(() => observer.complete(), 1500);
    });
    let observable8 = new Observable(observer => {
      setTimeout(() => observer.next(true), 1000);
      setTimeout(() => observer.next(false), 1500);
      setTimeout(() => observer.complete(), 1500);
    });
    let observable9 = new Observable(observer => {
      setTimeout(() => {
        observer.next("hello");
        observer.complete();
      }, 1500);
    });
    let newobservable3 = observable7.pipe(merge(observable8, observable9));
    newobservable3.subscribe(
      data => console.log("Received value", data),
      error => console.log("error", error),
      () => console.log("data stream completed")
    );

    // // merge() vs concat():-
    // let observable1 = new Observable(observer => {
    //   setTimeout(() => observer.next(10), 1000);
    //   setTimeout(() => observer.next(20), 1500);
    //   setTimeout(() => observer.complete(), 1500);
    // });
    // let observable2 = new Observable(observer => {
    //   setTimeout(() => observer.next(true), 1000);
    //   setTimeout(() => observer.next(false), 1500);
    //   setTimeout(() => observer.complete(), 1500);
    // });
    // let observable3 = new Observable(observer => {
    //   setTimeout(() => {
    //     observer.next("hello");
    //     observer.complete();
    //   }, 1500);
    // });
    // let observable = observable1.pipe(concat(observable2, observable3));
    // observable.subscribe(
    //   data => console.log("Received value", data),
    //   error => console.log("error", error),
    //   () => console.log("data stream completed")
    // );


  }


}
