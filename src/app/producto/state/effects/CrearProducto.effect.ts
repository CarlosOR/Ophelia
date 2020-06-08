import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, exhaustMap } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';
import { ProductoService } from '../../service/producto.service';
import { Fallido, CrearProducto, CrearProductoSatisfactoria } from '../actios/producto.actions';


@Injectable()
export class CrearProductosEffect {

    constructor(private actions$: Actions, private productoService: ProductoService) { }

    crearProductos$ = createEffect(() => this.actions$.pipe(
        ofType(CrearProducto),
        exhaustMap(({ producto }) => this.productoService.Crear(producto).pipe(
            map((producto) => CrearProductoSatisfactoria({ producto })),
            catchError(_ => of(Fallido()))
        ))
    ));

}