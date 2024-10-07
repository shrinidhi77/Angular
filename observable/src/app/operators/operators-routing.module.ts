import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperatorsComponent } from './operators.component';
import { CreationOperatorComponent } from './creation-operator/creation-operator.component';


const routes: Routes = [
  { path: 'creation', component: CreationOperatorComponent },
  { path: '', component: OperatorsComponent },
  { path: 'pipeable-operator', loadChildren: () => import('./pipeable-operator/pipeable-operator.module').then(m => m.PipeableOperatorModule) },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperatorsRoutingModule { }
