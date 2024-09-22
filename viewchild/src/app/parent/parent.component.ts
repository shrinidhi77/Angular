import { Component, ViewChild, ElementRef } from '@angular/core';
import { ChildComponent } from '../child/child.component'; // Import child component

@Component({
  selector: 'app-parent',
  template: `
    <button (click)="callChildGreet()">Call Child Greet</button>
    <button (click)="modifyChildText()">Change Child Text</button>
    <button (click)="modifyChildStyle()">Change Child Style</button>
    <app-child></app-child>
  `,
})
export class ParentComponent {

  @ViewChild(ChildComponent) childComponent!: ChildComponent;

  ngAfterViewInit(): void {
    // Access child component properties or methods if needed
    console.log('Child component message:', this.childComponent.message);
  }
  // Method in the parent to call the child's greet method
  callChildGreet(): void {
    this.childComponent.greet();
  }

  // Method to change the child component's paragraph text
  modifyChildText(): void {
    this.childComponent.changeText('Text modified by the parent component!');
  }

  // Method to change the child component's paragraph style
  modifyChildStyle(): void {
    this.childComponent.changeStyle('blue');
  }
}
