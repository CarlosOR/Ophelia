export interface Producto {
    Id?: number;
    referencia: string;
    nombre: string;
    precio: number;
    seleccionado?:boolean;
}