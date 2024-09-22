import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

  childData : string = '';
  handleChildEvent($event: string) {
    this.childData=$event;
    console.log('data from the child',$event);
  }

  parentData: string = 'parent';

}
