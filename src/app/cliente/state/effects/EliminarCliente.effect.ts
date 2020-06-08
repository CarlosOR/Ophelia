import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EliminarCliente, EliminarClienteSatisfactoria, Fallido } from '../actions/cliente.actions';
import { map, catchError, exhaustMap } from 'rxjs/operators';
import { ClienteService } from '../../service/cliente.service';
import { of } from 'rxjs/internal/observable/of';


@Injectable()
export class EliminarClienteEffect {

    constructor(private actions$: Actions, private clienteService: ClienteService) { }

    eliminarClientes$ = createEffect(() => this.actions$.pipe(
        ofType(EliminarCliente),
        exhaustMap(({ clienteId }) => this.clienteService.Eliminar(clienteId).pipe(
            map((tf) => EliminarClienteSatisfactoria({ clienteId }),
                catchError(_ => of(Fallido()))
            )
        ))
    ));

}