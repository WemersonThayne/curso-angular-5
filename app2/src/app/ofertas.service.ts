
import { Oferta } from './models/oferta.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';



@Injectable()
export class OfertasService {

    private baseUrl = 'http://localhost:3000';

    constructor(private http: HttpClient) { }

    getOfertas(): Observable<Oferta[]> {
        return this.http.get<Oferta[]>(`${this.baseUrl}/ofertas?destaque=true`)
          .pipe();
    }

    getOfertasByCategorias(categoria: string): Observable<Oferta[]> {
        return this.http.get<Oferta[]>(`${this.baseUrl}/ofertas?categoria=${categoria}`)
          .pipe();
    }

    getOfertasByID(id: number): Observable<Oferta> {
        return this.http.get<Oferta>(`${this.baseUrl}/ofertas?id=${id}`)
          .pipe();
    }

    getComoUsarOfertaByID(id: number): Observable<Oferta> {
        return this.http.get<Oferta>(`${this.baseUrl}/como-usar?id=${id}`)
          .pipe();
    }

    getOndeFicaOfertaByID(id: number): Observable<any> {
        return this.http.get<any>(`${this.baseUrl}/onde-fica?id=${id}`)
          .pipe();
    }

}
