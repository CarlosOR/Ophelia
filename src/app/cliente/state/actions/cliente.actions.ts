import { createAction, props } from '@ngrx/store';
import { Cliente } from '../../models/Cliente';

enum ClienteTypes {
    CargarClientes = "[Cliente] CargarClientes",
    CargarClientesSatisfactoria = "[Cliente] CargarClientesSatisfactoria",
    CrearCliente = "[Cliente] CrearCliente",
    CrearClienteSatifactoria = "[Cliente] CrearClienteSatifactoria",
    ModificarCliente = "[Cliente] ModificarCliente",
    ModificarClienteSatisfactoria = "[Cliente] ModificarClienteSatisfactoria",
    EliminarCliente = "[Cliente] EliminarCliente",
    EliminarClienteSatisfactoria = "[Cliente] EliminarClienteSatisfactoria",
    MarcarClienteSeleccionado = "[Cliente] MarcarClienteSeleccionado",
    Fallido = "[Cliente] Fallido"
}

export const CargarClientes = createAction(ClienteTypes.CargarClientes);
export const CargarClientesSatisfactoria = createAction(ClienteTypes.CargarClientesSatisfactoria, props<{ clientes: Array<Cliente> }>());

export const CrearCliente = createAction(ClienteTypes.CrearCliente, props<{ cliente: Cliente }>());
export const CrearClienteSatifactoria = createAction(ClienteTypes.CrearClienteSatifactoria, props<{ cliente: Cliente }>());

export const ModificarCliente = createAction(ClienteTypes.ModificarCliente, props<{ cliente: Cliente }>());
export const ModificarClienteSatisfactoria = createAction(ClienteTypes.ModificarClienteSatisfactoria, props<{ cliente: Cliente }>());

export const EliminarCliente = createAction(ClienteTypes.EliminarCliente, props<{ clienteId: number }>());
export const EliminarClienteSatisfactoria = createAction(ClienteTypes.EliminarClienteSatisfactoria, props<{ clienteId: number }>());

export const MarcarClienteSeleccionado = createAction(ClienteTypes.MarcarClienteSeleccionado, props<{ cliente: Cliente }>());

export const Fallido = createAction(ClienteTypes.Fallido);
