import { Component } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent {
  ordersArray = [
    { orderId: 1001, productName: "iphone 11 pro", billAmount: 1850, quantity: 1, orderRating: 4 },
    { orderId: 1002, productName: "iphone 11", billAmount: 1980, quantity: 2, orderRating: 5 },
    { orderId: 1003, productName: "Samsung Galaxy S10", billAmount: 1010, quantity: 1, orderRating: 4 },
    { orderId: 1004, productName: "Motorolla Edge+", billAmount: 980, quantity: 1, orderRating: 3 }
  ]
  
}
