import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CargarClientes, CargarClientesSatisfactoria, Fallido } from '../actions/cliente.actions';
import { map, catchError, exhaustMap } from 'rxjs/operators';
import { ClienteService } from '../../service/cliente.service';
import { of } from 'rxjs/internal/observable/of';


@Injectable()
export class CargarClientesEffect {

    constructor(private actions$: Actions, private clienteService: ClienteService) { }

    cargarClientes$ = createEffect(() => this.actions$.pipe(
        ofType(CargarClientes),
        exhaustMap(() => this.clienteService.ObtenerLista().pipe(
            map((clientes) => CargarClientesSatisfactoria({ clientes }),
                catchError(_ => of(Fallido()))
            )
        ))
    ));

}