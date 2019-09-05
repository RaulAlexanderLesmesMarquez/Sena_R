import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'bienvenido', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'final', loadChildren: './final/final.module#FinalPageModule' },
  { path: 'atras', loadChildren: './atras/atras.module#AtrasPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'bienvenido', loadChildren: './bienvenido/bienvenido.module#BienvenidoPageModule' },
  { path: 'cocina', loadChildren: './cocina/cocina.module#CocinaPageModule' },
  { path: 'orden', loadChildren: './orden/orden.module#OrdenPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
