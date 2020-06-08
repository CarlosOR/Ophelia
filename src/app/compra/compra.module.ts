import { NgModule } from '@angular/core';
import { CompraRoutingModule } from './compra-routing.module';
import { CompraComponent } from './compra.component';
import {
    DxButtonModule,
    DxDataGridModule
} from 'devextreme-angular';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';
import { MainCompraComponent } from './components/main-compra/main-compra.component';
import { RealizarCompraEffect } from './state/effects/RealizarCompra.effect';
import { CompraService } from './service/compra.service';
//Effects

@NgModule({
    declarations: [
        CompraComponent,
        MainCompraComponent
    ],
    imports: [
        CommonModule,
        CompraRoutingModule,
        //Devextreme
        DxDataGridModule,
        DxButtonModule,
        //NGRX
        /* StoreModule.forFeature(CLIENTE_STATE, ClienteReducer),*/
        EffectsModule.forFeature([
            //RealizarCompraEffect
        ])
    ],
    providers: [CompraService],
    bootstrap: [CompraComponent]
})
export class CompraModule { }
