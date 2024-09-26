import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'operators', loadChildren: () => import('./operators/operators.module').then(m => m.OperatorsModule) },
  { path: 'basic_observables', loadChildren: () => import('./basic-observables/basic-observables.module').then(m => m.BasicObservablesModule)},
  { path: 'home', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
