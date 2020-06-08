import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainClienteComponent } from './components/main-cliente/main-cliente.component';

const routes: Routes = [
  {
    path: '', component: MainClienteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule{

}