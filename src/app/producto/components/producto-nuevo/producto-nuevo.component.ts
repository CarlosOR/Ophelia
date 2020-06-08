import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ProductoState } from '../../models/productoState';
import { CrearProducto } from '../../state/actios/producto.actions';

@Component({
  selector: 'producto-nuevo',
  templateUrl: './producto-nuevo.component.html',
  styleUrls: ['./producto-nuevo.component.sass']
})
export class ProductoNuevoComponent implements OnInit {

  Producto: Producto;
  FormProducto: FormGroup;
  constructor(private fb: FormBuilder, private storeProducto: Store<ProductoState>) { }

  ngOnInit() {
    this.CrearFormulario();
  }

  CrearFormulario() {
    this.FormProducto = this.fb.group({
      nombre: ["", [Validators.required, Validators.maxLength(100),]],
      referencia: ["", [Validators.required, Validators.maxLength(20)]],
      precio: [0, [Validators.required, Validators.min(0.01), Validators.max(99999999)]]
    });
  }

  MapearProducto() {
    console.log("valueForm -> ", this.FormProducto.value);
    const producto: Producto = {
      nombre: this.FormProducto.value.nombre,
      referencia: this.FormProducto.value.referencia,
      precio: this.FormProducto.value.precio
    };
    this.Guardar(producto);
  }

  Guardar = (producto: Producto): void => this.storeProducto.dispatch(CrearProducto({ producto }));
}
