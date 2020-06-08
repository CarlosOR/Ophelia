import { Component, OnInit } from '@angular/core';
import { ProductoState } from '../../models/productoState';
import { Store } from '@ngrx/store';
import { CargarProductos } from '../../state/actios/producto.actions';
import { Observable } from 'rxjs';
import { Producto } from '../../models/producto';
import { getProductos } from '../../state/selectors/producto.selectors';

@Component({
  selector: 'producto-main',
  templateUrl: './producto-main.component.html',
  styleUrls: ['./producto-main.component.sass']
})
export class ProductoMainComponent implements OnInit {

  Productos$:Observable<Array<Producto>>;
  
  constructor(private storeProducto: Store<ProductoState>) { }

  ngOnInit() {
    this.storeProducto.dispatch(CargarProductos());
    this.Productos$ = this.storeProducto.select(getProductos);
  }

}
