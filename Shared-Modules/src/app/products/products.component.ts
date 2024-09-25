import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public productsArray = [
    { productImg: "../../assets/iphone11promax.jpg", productName: "iphone 11 pro", productPrice: 1850, inStock: true, rating: 5 },
    { productImg: "../../assets/iphone11.jpg", productName: "iphone 11", productPrice: 990, inStock: false, rating: 4 },
    { productImg: "../../assets/samsunggalaxys10.jpg", productName: "Samsung Galaxy S10", productPrice: 1010, inStock: true, rating: 5 },
    { productImg: "../../assets/motorollaedgeplus.jpg", productName: "Motorolla Edge+", productPrice: 980, inStock: true, rating: 4 }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
