import { Component } from '@angular/core';
import { of, from, throwError } from 'rxjs';

@Component({
  selector: 'app-creation-operator',
  templateUrl: './creation-operator.component.html',
  styleUrl: './creation-operator.component.css'
})
export class CreationOperatorComponent {

  constructor() {
    let ofObservable = of(["hello", "world"], ['Namaste', 'India']);
    ofObservable.subscribe(
      data => console.log("ofObservable Received value", data),
      error => console.log("ofObservable error", error),
      () => console.log("ofObservable data stream completed")
    )

    let fromObservable = from(["hello", "world"]);
    fromObservable.subscribe(
      data => console.log("fromObservable Received value", data),
      error => console.log("fromObservable error", error),
      () => console.log("fromObservable data stream completed")
    )

    let throwErrorobservable = throwError({ "message": "Something Broke!!" });
    throwErrorobservable.subscribe(
      data => console.log("throwErrorobservable Received value", data),
      error => console.log("throwErrorobservable error", error),
      () => console.log("throwErrorobservable data stream completed")
    );

  }

}
