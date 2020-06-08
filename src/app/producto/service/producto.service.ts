import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

export const urlApi = `${environment.urlApi}Producto/`;

@Injectable()
export class ProductoService{


    constructor(private http:HttpClient){
    }

    ObtenerLista(): Observable<Array<Producto>> {
        return this.http.get<Array<Producto>>(`${urlApi}get`);
    }

    Crear(producto: Producto): Observable<Producto> {
        return this.http.post<Producto>(`${urlApi}crear`, producto);
    }

    Modificar(producto: Producto): Observable<Producto> {
        return this.http.post<Producto>(`${urlApi}actualizar`, producto);
    }

    Eliminar(productoId: number): Observable<boolean> {
        return this.http.get<boolean>(`${urlApi}eliminar/${productoId}`);
    }


}