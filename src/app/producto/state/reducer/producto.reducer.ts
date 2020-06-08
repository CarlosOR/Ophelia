import { ProductoState } from "../../models/productoState";
import {
    CargarProductosSatisfactoria,
    CrearProductoSatisfactoria,
    ModicarProductoSatisfactoria,
    EliminarProductoSatisfactoria,
    MarcarProducto
} from '../actios/producto.actions';
import { createReducer, on, Action, createFeatureSelector } from '@ngrx/store';



const initialState: ProductoState = {
    Productos: [],
}


const productoReducer = createReducer(initialState,
    on(CargarProductosSatisfactoria, (state, { productos }) => ({ ...state, Productos: productos })),
    on(CrearProductoSatisfactoria, (state, { producto }) => ({ ...state, Productos: [...state.Productos, producto] })),
    on(ModicarProductoSatisfactoria, (state, { producto }) => ({
        ...state, Productos: state.Productos.map(c => ((c.Id == producto.Id) ? producto : c))
    })),
    on(EliminarProductoSatisfactoria, (state, { productoId }) => ({ ...state, Productos: state.Productos.filter(c => c.Id != productoId) })),
    on(MarcarProducto, (state, { productoId, agregar }) =>
        ({ ...state, Productos: state.Productos.map(c => ((c.Id == productoId) ? { ...c, seleccionado: agregar } : c)) }))
);


export const PRODUCTO_STATE = 'ProductoState';
export const getProducto = createFeatureSelector<ProductoState>(PRODUCTO_STATE);

export function ProductoReducer(state: ProductoState, action: Action) {
    return productoReducer(state, action);
}

