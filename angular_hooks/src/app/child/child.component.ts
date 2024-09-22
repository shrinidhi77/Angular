import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, contentChild, input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnInit, OnDestroy, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  interval: any;
  counter: number = 0;
  text_:any;
  @Input()
  inputting = "";

  @ContentChild('projectContent')projectContent:any;

  constructor(){
    console.log('child constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    console.log('child ngOnChanges');
    console.log('child ngOnChanges ngAfterContentInit' ,this.projectContent);
  }
 
  ngOnInit(): void {
    console.log('child ngoninit');
    // this.interval = setInterval(() => {
    //   this.counter = this.counter + 1;
    //   console.log(this.counter);
    // },1000);
    console.log('child ngOnInit ngAfterContentInit',this.projectContent);
  }

  ngDoCheck(): void {
    console.log('child ngDoCheck');
    console.log('child ngDoCheck ngAfterContentInit',this.projectContent);
  }

  ngAfterContentInit(): void {
    console.log('child ngAfterContentInit',this.projectContent);
  }

  ngAfterContentChecked(): void {
    console.log('child ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('child ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('child ngAfterViewChecked');
  }
 
  ngOnDestroy(): void {
    clearInterval(this.interval);
    console.log('child ngOnDestroy');
  }
}
