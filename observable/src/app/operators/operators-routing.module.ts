import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperatorsComponent } from './operators.component';
import { CreationOperatorComponent } from './creation-operator/creation-operator.component';
import { PipeableOperatorComponent } from './pipeable-operator/pipeable-operator.component';

const routes: Routes = [
  { path: 'creation', component: CreationOperatorComponent },
  { path: 'pipeable', component: PipeableOperatorComponent },
  { path: '', component: OperatorsComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperatorsRoutingModule { }
