import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '', loadChildren: 'src/app/cliente/cliente.module#ClienteModule'
  },
  {
    path: 'cliente', loadChildren: 'src/app/cliente/cliente.module#ClienteModule'
  },
  {
    path: 'producto', loadChildren: 'src/app/producto/producto.module#ProductoModule'
  },
  {
    path: 'comprar', loadChildren: 'src/app/compra/compra.module#CompraModule'
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
