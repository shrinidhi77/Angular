import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-basic-observables',
  templateUrl: './basic-observables.component.html',
  styleUrl: './basic-observables.component.css'
})
export class BasicObservablesComponent {
 // Declare the observable as a class member
 readonly observable1: Observable<number>;
 readonly observable2: Observable<number>;

 constructor() {
   // Initialize the observable in the constructor
   this.observable1 = new Observable(observer => {
     observer.next(1);
     observer.next(2);
     observer.error(3);
     observer.complete();
   });

   this.observable1.subscribe(
     data => console.log("observable1 Received Data: ", data),
     error => console.log("observable1 Error Occured: ", error),
     () => console.log("observable1 Data stream completed"),
   )

   console.log("----------------------------------");
   
   this.observable2 = new Observable(observer => {
     setTimeout(() => {
       observer.next(1);
     }, 1000);
     setTimeout(() => {
       observer.next(2);
     }, 2000);
     setTimeout(() => {
       observer.complete();
     }, 1000);
   });
   console.log('Before subscribe call');
   this.observable2.subscribe(
     data => console.log("observable2 Received Data: ", data),
     error => console.log("observable2 Error occurred: ", error),
     () => console.log("observable2 Data stream completed"),
   )
   console.log('After subscribe call');

 }
}
