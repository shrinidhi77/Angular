import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipeableOperatorRoutingModule } from './pipeable-operator-routing.module';
import { PipeableOperatorComponent } from './pipeable-operator.component';
import { CombinationOperatorComponent } from './combination-operator/combination-operator.component';
import { MathematicalOperatorComponent } from './mathematical-operator/mathematical-operator.component';
import { ErrorhandlingOperatorComponent } from './errorhandling-operator/errorhandling-operator.component';
import { TransformationOperatorComponent } from './transformation-operator/transformation-operator.component';
import { FilterOperatorComponent } from './filter-operator/filter-operator.component';


@NgModule({
  declarations: [
    PipeableOperatorComponent,
    CombinationOperatorComponent,
    MathematicalOperatorComponent,
    ErrorhandlingOperatorComponent,
    TransformationOperatorComponent,
    FilterOperatorComponent
  ],
  imports: [
    CommonModule,
    PipeableOperatorRoutingModule
  ]
})
export class PipeableOperatorModule { }
