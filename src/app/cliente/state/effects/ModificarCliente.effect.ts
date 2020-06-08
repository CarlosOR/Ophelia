import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ModificarClienteSatisfactoria, Fallido,ModificarCliente } from '../actions/cliente.actions';
import { map, catchError, exhaustMap } from 'rxjs/operators';
import { ClienteService } from '../../service/cliente.service';
import { of } from 'rxjs/internal/observable/of';


@Injectable()
export class ModificarClienteEffect {

    constructor(private actions$: Actions, private clienteService: ClienteService) { }

    modificarClientes$ = createEffect(() => this.actions$.pipe(
        ofType(ModificarCliente),
        exhaustMap(({ cliente }) => this.clienteService.Modificar(cliente).pipe(
            map((cliente) => ModificarClienteSatisfactoria({ cliente }),
                catchError(_ => of(Fallido()))
            )
        ))
    ));

}