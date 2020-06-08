import { createSelector } from '@ngrx/store';
import { getProducto } from '../reducer/producto.reducer';


export const getProductos = createSelector(getProducto, p => (p ? JSON.parse(JSON.stringify(p.Productos)) : []));
export const getProductosSeleccionados = createSelector(getProducto, p => (p ? (p.Productos.filter(p => p.seleccionado)) : []));
