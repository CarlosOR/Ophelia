import { props, createAction } from '@ngrx/store'
import { Producto } from '../../models/producto'

enum ProductosTypes {
    CargarProductos = "[Producto] CargarProductos",
    CargarProductosSatisfactoria = "[Producto] CargarProductosSatisfactoria",
    CrearProducto = "[Producto] CrearProducto",
    CrearProductoSatisfactoria = "[Producto] CrearProductoSatisfactoria",
    ModicarProducto = "[Producto] ModicarProducto",
    ModicarProductoSatisfactoria = "[Producto] ModicarProductoSatisfactoria",
    EliminarProducto = "[Producto] EliminarProducto",
    EliminarProductoSatisfactoria = "[Producto] EliminarProductoSatisfactoria",
    MarcarProducto = "[Producto] MarcarProducto",
    Fallido = "[Producto] Fallido"
}


export const CargarProductos = createAction(ProductosTypes.CargarProductos);
export const CargarProductosSatisfactoria = createAction(ProductosTypes.CargarProductosSatisfactoria, props<{ productos: Array<Producto> }>());
//Crear
export const CrearProducto = createAction(ProductosTypes.CrearProducto, props<{ producto: Producto }>())
export const CrearProductoSatisfactoria = createAction(ProductosTypes.CrearProductoSatisfactoria, props<{ producto: Producto }>())
//Modificar
export const ModicarProducto = createAction(ProductosTypes.ModicarProducto, props<{ producto: Producto }>())
export const ModicarProductoSatisfactoria = createAction(ProductosTypes.ModicarProductoSatisfactoria, props<{ producto: Producto }>())
//Eliminar
export const EliminarProducto = createAction(ProductosTypes.EliminarProducto, props<{ productoId: number }>())
export const EliminarProductoSatisfactoria = createAction(ProductosTypes.EliminarProductoSatisfactoria, props<{ productoId: number }>())
//Marcar
export const MarcarProducto = createAction(ProductosTypes.MarcarProducto, props<{ productoId: number, agregar: boolean }>())
//Fallido
export const Fallido = createAction(ProductosTypes.Fallido)