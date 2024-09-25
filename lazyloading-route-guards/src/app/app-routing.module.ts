import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';
import { CustomPreloadingStrategy } from './customPreloadingStrategy';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'products',
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule),
    data: { preload: false },  // Will be preloaded because preload is set to true
    canActivate: [AuthGuard]
  },
  {
    path: 'orders',
    loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule),
    data: { preload: false },  // Will not be preloaded
    canLoad: [AuthGuard]
  },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: CustomPreloadingStrategy })],
  exports: [RouterModule]
})
export class AppRoutingModule { }