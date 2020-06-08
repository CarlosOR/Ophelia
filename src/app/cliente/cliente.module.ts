import { NgModule } from '@angular/core';
import { ClienteComponent } from './cliente.component';
import { ClienteRoutingModule } from './cliente-routing.module';
import {
  DxSelectBoxModule,
  DxDataGridModule,
  DxButtonModule
} from 'devextreme-angular';
import { StoreModule } from '@ngrx/store';
import { CLIENTE_STATE, ClienteReducer } from './state/reducers/cliente.reducer';
import { EffectsModule } from '@ngrx/effects';
import { MainClienteComponent } from './components/main-cliente/main-cliente.component';
import { ClienteService } from './service/cliente.service';
import { CommonModule } from '@angular/common';
//Effects
import { EliminarClienteEffect } from './state/effects/EliminarCliente.effect';
import { CargarClientesEffect } from './state/effects/CargarCliente.effect';
import { CrearClientesEffect } from './state/effects/CrearCliente.effect';
import { ModificarClienteEffect } from './state/effects/ModificarCliente.effect';

@NgModule({
  declarations: [
    ClienteComponent,
    MainClienteComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    //Devextreme
    DxDataGridModule,
    DxSelectBoxModule,
    DxButtonModule,
    //NGRX
    StoreModule.forFeature(CLIENTE_STATE, ClienteReducer),
    EffectsModule.forFeature([
      CargarClientesEffect,
      CrearClientesEffect,
      ModificarClienteEffect,
      EliminarClienteEffect
    ])
  ],
  providers: [ClienteService],
  bootstrap: [ClienteComponent]
})
export class ClienteModule { }
