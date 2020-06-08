import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CrearClienteSatifactoria, Fallido, CrearCliente } from '../actions/cliente.actions';
import { map, catchError, exhaustMap } from 'rxjs/operators';
import { ClienteService } from '../../service/cliente.service';
import { of } from 'rxjs/internal/observable/of';


@Injectable()
export class CrearClientesEffect {

    constructor(private actions$: Actions, private clienteService: ClienteService) { }

    crearClientes$ = createEffect(() => this.actions$.pipe(
        ofType(CrearCliente),
        exhaustMap(({ cliente }) => this.clienteService.Crear(cliente).pipe(
            map((cliente) => CrearClienteSatifactoria({ cliente }),
                catchError(_ => of(Fallido()))
            )
        ))
    ));

}