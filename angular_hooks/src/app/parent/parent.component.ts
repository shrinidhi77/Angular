import { AfterContentChecked, AfterContentInit, Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent implements OnInit, OnChanges, DoCheck , AfterContentInit, AfterContentChecked{
  isChild: any = false;
  text_:any;

  constructor() {
    console.log('parent constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('parent ngOnChanges');
  }

  ngOnInit(): void {
    console.log('parent ngoninit');
  }

  ngDoCheck(): void {
    console.log('parent ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('parent ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('child ngAfterContentChecked');
  }

  togglechild() {
    this.isChild = !this.isChild;
  }

}
