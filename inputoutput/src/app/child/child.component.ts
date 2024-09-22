// Child component
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<p>child works!</p>
             <p>{{ childData_from_parent }}</p> 
             <button (click)="sendData()">Click Me</button>`
})
export class ChildComponent {
  @Input() childData_from_parent!: string; // Receives data from the parent
  @Output() childEvent = new EventEmitter<string>();

  sendData() {
    this.childEvent.emit('Data from Child');
  }
}


