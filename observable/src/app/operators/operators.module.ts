import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperatorsRoutingModule } from './operators-routing.module';
import { OperatorsComponent } from './operators.component';
import { CreationOperatorComponent } from './creation-operator/creation-operator.component';
import { PipeableOperatorComponent } from './pipeable-operator/pipeable-operator.component';
import { TransformationOperatorComponent } from './pipeable-operator/transformation-operator/transformation-operator.component';
import { FilterOperatorComponent } from './pipeable-operator/filter-operator/filter-operator.component';
import { ErrorhandlingOperatorComponent } from './pipeable-operator/errorhandling-operator/errorhandling-operator.component';
import { MathematicalOperatorComponent } from './pipeable-operator/mathematical-operator/mathematical-operator.component';
import { CombinationOperatorComponent } from './pipeable-operator/combination-operator/combination-operator.component';


@NgModule({
  declarations: [
    OperatorsComponent,
    CreationOperatorComponent,
    PipeableOperatorComponent,
    TransformationOperatorComponent,
    FilterOperatorComponent,
    ErrorhandlingOperatorComponent,
    MathematicalOperatorComponent,
    CombinationOperatorComponent
  ],
  imports: [
    CommonModule,
    OperatorsRoutingModule
  ]
})
export class OperatorsModule { }
