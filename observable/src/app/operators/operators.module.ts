import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperatorsRoutingModule } from './operators-routing.module';
import { OperatorsComponent } from './operators.component';
import { CreationOperatorComponent } from './creation-operator/creation-operator.component';

@NgModule({
  declarations: [
    OperatorsComponent,
    CreationOperatorComponent
  ],
  imports: [
    CommonModule,
    OperatorsRoutingModule
  ]
})
export class OperatorsModule { }
