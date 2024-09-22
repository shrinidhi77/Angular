import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-child',
  template: `
    <div *ngIf="data">
      <p *ngFor="let item of data">{{ item }}</p>
    </div>
  `
})
export class ChildComponent implements OnInit, OnDestroy {
  data: string[] = [];
  private subscription: Subscription = new Subscription(); // Handles multiple subscriptions if needed

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.subscription.add(
      this.dataService.getData().subscribe(
        (result) => {
          this.data = result;
        },
        (error) => {
          console.error('Error fetching data:', error);
        }
      )
    );
  }

  ngOnDestroy(): void {
    // Unsubscribe from all observables to avoid memory leaks
    console.log('Unsubscribed from')
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
