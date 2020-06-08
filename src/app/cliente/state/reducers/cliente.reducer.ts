import { ClienteState } from "../../models/ClienteState";
import { createReducer, on, createFeatureSelector, Action } from '@ngrx/store';
import { CargarClientesSatisfactoria, CrearClienteSatifactoria, EliminarCliente, ModificarCliente, MarcarClienteSeleccionado } from '../actions/cliente.actions';

const initialState: ClienteState = {
    Clientes: [],
}

const clienteReducer = createReducer(initialState,
    on(CargarClientesSatisfactoria, (state, { clientes }) => ({ ...state, Clientes: clientes })),
    on(CrearClienteSatifactoria, (state, { cliente }) => ({ ...state, Clientes: [...state.Clientes, cliente] })),
    on(ModificarCliente, (state, { cliente }) => ({
        ...state, Clientes: state.Clientes.map(c => ((c.id == cliente.id) ? cliente : c))
    })),
    on(EliminarCliente, (state, { clienteId }) => ({ ...state, Clientes: state.Clientes.filter(c => c.id != clienteId) })),
    on(MarcarClienteSeleccionado, (state, { cliente }) => ({ ...state, ClienteSeleccionado: cliente }))
);

export const CLIENTE_STATE = 'ClienteState';
export const getCliente = createFeatureSelector<ClienteState>(CLIENTE_STATE);

export function ClienteReducer(state: ClienteState, action: Action) {
    return clienteReducer(state, action);
}