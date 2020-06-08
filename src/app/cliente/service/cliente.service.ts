import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Cliente } from '../models/Cliente';

export const urlApi = `${environment.urlApi}cliente`;

@Injectable()
export class ClienteService {
    constructor(private http: HttpClient) { }

    ObtenerLista(): Observable<Array<Cliente>> {
        return this.http.get<Array<Cliente>>(`${urlApi}/get`);
    }

    Crear(cliente: Cliente): Observable<Cliente> {
        return this.http.post<Cliente>(`${urlApi}/crear`, cliente);
    }

    Modificar(cliente: Cliente): Observable<Cliente> {
        return this.http.post<Cliente>(`${urlApi}/actualizar`, cliente);
    }

    Eliminar(clienteId: number): Observable<boolean> {
        return this.http.get<boolean>(`${urlApi}/eliminar/${clienteId}`);
    }

}