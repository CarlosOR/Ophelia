



import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, exhaustMap } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';
import { ProductoService } from '../../service/producto.service';
import { CargarProductos, CargarProductosSatisfactoria, Fallido } from '../actios/producto.actions';


@Injectable()
export class CargarProductosEffect {

    constructor(private actions$: Actions, private productoService: ProductoService) { }

    cargarProductos$ = createEffect(() => this.actions$.pipe(
        ofType(CargarProductos),
        exhaustMap(() => this.productoService.ObtenerLista().pipe(
            map((productos) => CargarProductosSatisfactoria({ productos })),
            catchError(_ => of(Fallido()))
        ))
    ));

}