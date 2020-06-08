import { Component, OnInit, Input } from '@angular/core';
import { Producto } from '../../models/producto';
import { Store } from '@ngrx/store';
import { ProductoState } from '../../models/productoState';
import { MarcarProducto, EliminarProducto } from '../../state/actios/producto.actions';

@Component({
  selector: 'producto-item',
  templateUrl: './producto-item.component.html',
  styleUrls: ['./producto-item.component.sass']
})
export class ProductoItemComponent implements OnInit {

  @Input() Producto: Producto;
  AgregarTooltip: boolean = false;
  constructor(private storeProducto: Store<ProductoState>) {
  }

  ngOnInit() {
    this.Producto.seleccionado = this.Producto.seleccionado == undefined ? false : this.Producto.seleccionado;
  }

  Eliminar = (): void => this.storeProducto.dispatch(EliminarProducto({ productoId: this.Producto.Id }));

  Agregar(agregar: any) {
    this.storeProducto.dispatch(MarcarProducto({ productoId: this.Producto.Id, agregar }));
  }
}
