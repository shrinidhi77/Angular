import { Component } from '@angular/core';
import { Product } from './product';
import { from, of, Observable } from 'rxjs'
import { map, mergeMap } from 'rxjs/operators';
@Component({
  selector: 'app-transformation-operator',
  templateUrl: './transformation-operator.component.html',
  styleUrl: './transformation-operator.component.css'
})
export class TransformationOperatorComponent {
  constructor() {
    // Array of products
    let productsArray: Product[] = [
      { pName: "television", price: 17999 },
      { pName: "air conditioner", price: 32499 },
      { pName: "smartphone", price: 24299 }
    ];

    // Use 'from' to create an observable that emits each product individually
    let products = from(productsArray);
    let productList = products.pipe(map((product) => product.pName));
    productList.subscribe(
      x => console.log('Product Name: ', x),
      error => console.log("error", error),
      () => console.log("data stream completed")
    );

    const getData = (id: any) => {
      return new Observable(observer => {
        setTimeout(() => {
          observer.next(`Fetched data for id ${id}`)
        }, 1000);
      })
    }

    let arrayObservable1 = from([10, 20, 30, 40])
    let dataObservable1 = arrayObservable1.pipe(map(param => getData(param)))
    dataObservable1.subscribe(val => val.subscribe(data => console.log("Using map",data)));

    let arrayObservable2 = from([10, 20, 30, 40])
    let dataObservable2 = arrayObservable2.pipe(mergeMap(param => getData(param)))
    dataObservable2.subscribe(val => console.log("Using mergeMap",val));

  }

}
