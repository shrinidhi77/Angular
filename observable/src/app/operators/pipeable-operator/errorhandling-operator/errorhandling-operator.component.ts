import { Component } from '@angular/core';
import { Product } from './product';
import { from, of, Observable } from 'rxjs'
import { map, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-errorhandling-operator',
  templateUrl: './errorhandling-operator.component.html',
  styleUrl: './errorhandling-operator.component.css'
})
export class ErrorhandlingOperatorComponent {
  constructor() {
    // Array of products
    let productsArray: Product[] = [
      { pName: "television", price: 17999 },
      { pName: "air conditioner", price: 32499 },
      { pName: "smartphone", price: 24299 }
    ];
    let products = from(productsArray);
    // Use 'from' to create an observable that emits each product individually
    let finalObservable = products.pipe(
      map(product => {
        if (product.price > 25000) throw new Error(`Price of ${product.pName} exceeds 25000`);
        else return product;
      }),
      catchError(err => of({ message: err.message })),
    )
    finalObservable.subscribe(x => console.log(x));
    
  }

  // retry operator and how to use
  // // getBooks(): Observable<Book[]> {
  // //   return this.http.get<Book[]>(
  // //     this.booksUrl
  // //   ).pipe(
  // //       retry(3));
  // // }
}
