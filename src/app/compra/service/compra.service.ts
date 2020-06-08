import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Factura } from '../models/Factura';

export const urlApi = `${environment.urlApi}Factura/`;

@Injectable()
export class CompraService {


    constructor(private http: HttpClient) {
    }

    RealizarCompra(factura: Factura): Observable<boolean> {
        return this.http.post<boolean>(`${urlApi}Facturar`, factura);
    }
}