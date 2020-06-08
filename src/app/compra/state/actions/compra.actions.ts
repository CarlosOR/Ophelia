import { props, createAction } from '@ngrx/store'
import { Factura } from '../../models/Factura'

enum CompraTypes {
    RealizarCompra = "[Compra] RealizarCompra",
    RealizarCompraSatisfactoria = "[Compra] RealizarCompraSatisfactoria",
    Fallido = "[Compra] FacturaFallido"
}


export const RealizarCompra = createAction(CompraTypes.RealizarCompra, props<{ facturar: Factura }>())
export const RealizarCompraSatisfactoria = createAction(CompraTypes.RealizarCompraSatisfactoria)
export const Fallido = createAction(CompraTypes.Fallido)
