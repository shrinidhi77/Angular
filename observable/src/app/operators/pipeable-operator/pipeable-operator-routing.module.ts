import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PipeableOperatorComponent } from './pipeable-operator.component';
import { CombinationOperatorComponent } from './combination-operator/combination-operator.component';
import { MathematicalOperatorComponent } from './mathematical-operator/mathematical-operator.component';
import { ErrorhandlingOperatorComponent } from './errorhandling-operator/errorhandling-operator.component';
import { TransformationOperatorComponent } from './transformation-operator/transformation-operator.component';
import { FilterOperatorComponent } from './filter-operator/filter-operator.component';

const routes: Routes = [
  { path: '', component: PipeableOperatorComponent },
  { path: 'combination', component: CombinationOperatorComponent },
  { path: 'transformation', component: TransformationOperatorComponent },
  { path: 'mathmatical', component: MathematicalOperatorComponent },
  { path: 'filtering', component: FilterOperatorComponent },
  { path: 'errorhandling', component: ErrorhandlingOperatorComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PipeableOperatorRoutingModule { }
