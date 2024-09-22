import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<p>Direct Access to Child Component or DOM Element: When you need to access a child component’s methods, properties, or manipulate a DOM element directly.</p>
  <p #childParagraph>{{ message }}</p>
              `
})
export class ChildComponent {
  message: string = 'Hello from Child Component!';
  greet(): void {
    this.message = 'The parent has called greet()!';
    console.log('Child component greet() method called!');
  }
  @ViewChild('childParagraph') paragraph!: ElementRef;

  // Method to change the content of the paragraph
  changeText(newText: string): void {
    this.paragraph.nativeElement.textContent = newText;
  }

  // Method to change the styles of the paragraph
  changeStyle(color: string): void {
    this.paragraph.nativeElement.style.color = color;
  }
}
