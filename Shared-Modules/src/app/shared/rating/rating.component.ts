import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Input() ratingValue: number = 0;
  stars: number[] = [];

  constructor() { }

  ngOnInit(): void {
    this.stars = Array(this.ratingValue).fill(0);  // Create an array of the given size
  }

}
