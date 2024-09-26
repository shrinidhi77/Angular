import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicObservablesRoutingModule } from './basic-observables-routing.module';
import { BasicObservablesComponent } from './basic-observables.component';


@NgModule({
  declarations: [
    BasicObservablesComponent
  ],
  imports: [
    CommonModule,
    BasicObservablesRoutingModule
  ]
})
export class BasicObservablesModule { }
