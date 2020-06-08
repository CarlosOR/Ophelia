import { Component, OnInit } from '@angular/core';
import { ProductoState } from '../producto/models/productoState';
import { Store } from '@ngrx/store';
import { getProductosSeleccionados } from '../producto/state/selectors/producto.selectors';
import { ClienteState } from '../cliente/models/ClienteState';
import { getClienteSeleccionado } from '../cliente/state/selectors/cliente.selector';
import { Cliente } from '../cliente/models/Cliente';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  ProductosSeleccionados: number;
  ClienteSeleccionado: Cliente;
  TotalPrecio: number;
  constructor(private storeProducto: Store<ProductoState>, private storeCliente: Store<ClienteState>) { }

  ngOnInit() {
    this.ProductosSeleccionadosSuscribe();
    this.ClienteSeleccionadoSuscribe();
  }

  ClienteSeleccionadoSuscribe() {
    this.storeCliente.select(getClienteSeleccionado).subscribe((cliente) => {
      this.ClienteSeleccionado = cliente;
    });
  }


  ProductosSeleccionadosSuscribe() {
    this.storeProducto.select(getProductosSeleccionados).subscribe((productos) => {
      this.ProductosSeleccionados = productos.length;
      if (productos.length > 0)
        this.TotalPrecio = productos.reduce((acum, val) => (acum += val.precio), 0);
      else
        this.TotalPrecio = 0;
    });
  }


}
