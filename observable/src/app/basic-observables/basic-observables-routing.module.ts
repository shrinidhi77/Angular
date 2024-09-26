import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicObservablesComponent } from './basic-observables.component';

const routes: Routes = [{ path: '', component: BasicObservablesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicObservablesRoutingModule { }
