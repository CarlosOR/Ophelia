

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainCompraComponent } from './components/main-compra/main-compra.component';

const routes: Routes = [
    {
        path: '', component: MainCompraComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CompraRoutingModule {

}