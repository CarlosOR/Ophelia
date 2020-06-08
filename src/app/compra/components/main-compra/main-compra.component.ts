import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductoState } from 'src/app/producto/models/productoState';
import { Observable } from 'rxjs';
import { Producto } from 'src/app/producto/models/producto';
import { getProductosSeleccionados } from 'src/app/producto/state/selectors/producto.selectors';
import { RealizarCompra } from '../../state/actions/compra.actions';
import { ClienteState } from 'src/app/cliente/models/ClienteState';
import { Cliente } from 'src/app/cliente/models/Cliente';
import { getClienteSeleccionado } from 'src/app/cliente/state/selectors/cliente.selector';
import { Factura } from '../../models/Factura';
import { CompraService } from '../../service/compra.service';

@Component({
  selector: 'main-compra',
  templateUrl: './main-compra.component.html',
  styleUrls: ['./main-compra.component.sass']
})
export class MainCompraComponent implements OnInit {

  Productos: Array<Producto>;
  Cliente: Cliente;
  CompraRealizada: boolean;
  constructor(private storeProducto: Store<ProductoState>, private storeCliente: Store<ClienteState>, private compraService: CompraService) { }

  ngOnInit() {
    this.storeProducto.select(getProductosSeleccionados).subscribe(productos => this.Productos = productos);
    this.storeCliente.select(getClienteSeleccionado).subscribe(cliente => this.Cliente = cliente);
  }

  RealizarCompra() {
    const factura: Factura = {
      productos: this.Productos,
      cliente: this.Cliente,
      total: this.Productos.reduce((a, v) => (a += v.precio), 0)
    };

    this.compraService.RealizarCompra(factura).toPromise()
      .then(resp => this.CompraRealizada = resp)
      .catch(resp => this.CompraRealizada = false);
  }




}
