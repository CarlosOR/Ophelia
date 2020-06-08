import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, exhaustMap } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';
import { ProductoService } from '../../service/producto.service';
import { Fallido, EliminarProducto, EliminarProductoSatisfactoria } from '../actios/producto.actions';


@Injectable()
export class EliminarProductosEffect {

    constructor(private actions$: Actions, private productoService: ProductoService) { }

    eliminarProductos$ = createEffect(() => this.actions$.pipe(
        ofType(EliminarProducto),
        exhaustMap(({ productoId }) => this.productoService.Eliminar(productoId).pipe(
            map(_ => EliminarProductoSatisfactoria({ productoId })),
            catchError(_ => of(Fallido()))
        ))
    ));

}