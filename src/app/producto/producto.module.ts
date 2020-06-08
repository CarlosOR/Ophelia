import { NgModule } from '@angular/core';
import {
  DxCheckBoxModule,
  DxTooltipModule,
  DxTemplateModule,
  DxAccordionModule,
  DxSliderModule,
  DxTagBoxModule,
  DxFormModule,
  DxButtonModule,
  DxTextBoxModule,
  DxNumberBoxModule,
  DxValidatorModule
} from 'devextreme-angular';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';
import { ProductoComponent } from './producto.component';
import { ProductoRoutingModule } from './producto-routing.module';
import { ProductoMainComponent } from './components/producto-main/producto-main.component';
import { ProductoListComponent } from './components/producto-list/producto-list.component';
import { ProductoReducer, PRODUCTO_STATE } from './state/reducer/producto.reducer';
import { CargarProductosEffect } from './state/effects/CargarProductos.effec';
import { ProductoService } from './service/producto.service';
import { ProductoItemComponent } from './components/producto-item/producto-item.component';
import { ProductoNuevoComponent } from './components/producto-nuevo/producto-nuevo.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CrearProductosEffect } from './state/effects/CrearProducto.effect';
import { EliminarProductosEffect } from './state/effects/EliminarProducto.effect';
//Effects

@NgModule({
  declarations: [
    ProductoMainComponent,
    ProductoListComponent,
    ProductoItemComponent,
    ProductoComponent,
    ProductoNuevoComponent,
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    //Devextreme
    DxAccordionModule,
    DxCheckBoxModule,
    DxSliderModule,
    DxTagBoxModule,
    DxTemplateModule,
    DxTooltipModule,
    DxFormModule,
    DxButtonModule,
    DxTextBoxModule,
    DxNumberBoxModule,
    DxValidatorModule,
    //NGRX
    StoreModule.forFeature(PRODUCTO_STATE, ProductoReducer),
    EffectsModule.forFeature([
      CargarProductosEffect,
      CrearProductosEffect,
      EliminarProductosEffect
    ])
  ],
  providers: [ProductoComponent, ProductoService],
  bootstrap: [ProductoComponent]
})
export class ProductoModule { }
