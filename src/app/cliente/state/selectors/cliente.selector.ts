import { createSelector } from '@ngrx/store';
import { getCliente } from '../reducers/cliente.reducer';

export const getClientes = createSelector(getCliente, c => JSON.parse(JSON.stringify(c.Clientes)));
export const getClienteSeleccionado = createSelector(getCliente, c => (c && c.ClienteSeleccionado ? c.ClienteSeleccionado[0] : undefined));

