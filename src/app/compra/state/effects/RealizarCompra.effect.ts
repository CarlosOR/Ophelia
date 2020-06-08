import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, exhaustMap } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';
import { CompraService } from '../../service/compra.service';
import { RealizarCompra, RealizarCompraSatisfactoria, Fallido } from '../actions/compra.actions';


@Injectable()
export class RealizarCompraEffect{

    constructor(private actions$: Actions, private compraService: CompraService) { }

    realizarCompra$ = createEffect(() => this.actions$.pipe(
        ofType(RealizarCompra),
        exhaustMap(({ facturar }) => this.compraService.RealizarCompra(facturar).pipe(
            map(() => RealizarCompraSatisfactoria),
            catchError(_ => of(Fallido()))
        ))
    ));

}