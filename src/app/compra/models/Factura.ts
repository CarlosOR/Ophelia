import { Producto } from 'src/app/producto/models/producto';
import { Cliente } from 'src/app/cliente/models/Cliente';

export interface Factura {
    cliente: Cliente;
    productos: Array<Producto>;
    total: number;
}