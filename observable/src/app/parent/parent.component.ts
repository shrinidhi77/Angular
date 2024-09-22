import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <button (click)="toggleChild()">Toggle Child Component</button>
    <app-child *ngIf="showChild"></app-child>
  `
})
export class ParentComponent {
  showChild = true;

  toggleChild(): void {
    this.showChild = !this.showChild; // This will trigger child component destruction and unsubscription
  }
}
