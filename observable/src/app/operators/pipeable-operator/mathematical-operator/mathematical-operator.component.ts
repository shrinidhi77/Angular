import { Component } from '@angular/core';
import { from, of } from 'rxjs';
import { max, min, reduce } from 'rxjs/operators';
import { Product } from './product';

@Component({
  selector: 'app-mathematical-operator',
  templateUrl: './mathematical-operator.component.html',
  styleUrls: ['./mathematical-operator.component.css']
})
export class MathematicalOperatorComponent {

  constructor() {
    // Array of products
    let productsArray: Product[] = [
      { pName: "television", price: 17999 },
      { pName: "air conditioner", price: 32499 },
      { pName: "smartphone", price: 24299 }
    ];

    // Use 'from' to create an observable that emits each product individually
    let products = from(productsArray);

    products.subscribe(
      (x: Product) => console.log('Product : ', x),
      error => console.log("Error: ", error),
      () => console.log("Data stream completed")
    );

    // Use the max operator to find the product with the highest price
    let costlyProduct = products.pipe(
      max<Product>((a: Product, b: Product) => a.price > b.price ? 1 : -1)
    );

    // Subscribe to the observable to get the result
    costlyProduct.subscribe(
      (x: Product) => console.log('Product with the highest price: ', x),
      error => console.log("Error:", error),
      () => console.log("Data stream completed")
    );


    let numbers = of(1, 2, 3, 4, 5, 6);
    let maxobservable = numbers.pipe(max());
    maxobservable.subscribe(
      data => console.log("MAX Received value", data),
      error => console.log("error", error),
      () => console.log("data stream completed")
    );

    let minobservable = numbers.pipe(min());
    minobservable.subscribe(
      data => console.log("MIN Received value", data),
      error => console.log("error", error),
      () => console.log("data stream completed")
    );

    let total_price = products.pipe(reduce((acc, itemsdet) => acc + itemsdet.price, 0));
    total_price.subscribe(
      data => console.log("total amount Received value", data),
      error => console.log("error", error),
      () => console.log("data stream completed")
    );


  }
}

