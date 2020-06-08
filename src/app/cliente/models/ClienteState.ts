import { Cliente } from './Cliente';

export interface ClienteState{
    Clientes: Array<Cliente>;
    ClienteSeleccionado?:Cliente;
}