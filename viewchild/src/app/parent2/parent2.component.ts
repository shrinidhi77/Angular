import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  styleUrl: './parent2.component.css'
})
export class Parent2Component {

  @ViewChild('inputBox') inputElement!: ElementRef;

  // Method to focus on the input box
  focusOnInput(): void {
    this.inputElement.nativeElement.focus();
  }
}
