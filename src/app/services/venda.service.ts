import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Venda } from '../models/venda';
import { Estoque } from '../models/estoque';

@Injectable({
  providedIn: 'root'
})
export class VendaService {

  myAppUrl: string;
  myApiUrl: string;
  myApiUrl1: string;
  myApiUrlCreate: string;
  myApiUrlUpdate: string;
  myApiUrlDelete: string;
  myApiUrlRemoveEstoque: string;
  myApiUrlAddEstoque: string;
  myApiUrlGetEstoque: string;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    })
  };
  constructor(private http: HttpClient) {
    this.myAppUrl = environment.appUrl;
    this.myApiUrl = '/venda/listcompleto/';
    this.myApiUrl1 = '/venda/listone/';
    this.myApiUrlCreate = '/venda/create/';
    this.myApiUrlUpdate = '/venda/update/';
    this.myApiUrlDelete = '/venda/delete/';
    this.myApiUrlAddEstoque = '/estoque/adiciona/';
    this.myApiUrlRemoveEstoque = '/estoque/remove/';
    this.myApiUrlGetEstoque = '/estoque/listone/';
  }

  getVendas(): Observable<Venda[]> {
    return this.http.get<Venda[]>(this.myAppUrl + this.myApiUrl)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  getVenda(bebidaId: string): Observable<Venda> {
    return this.http.get<Venda>(this.myAppUrl + this.myApiUrl1 + bebidaId)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  getEstoque(bebidaId: string): Observable<Estoque> {
    return this.http.get<Estoque>(this.myAppUrl + this.myApiUrlGetEstoque + bebidaId)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  saveVenda(venda): Observable<Venda> {
    return this.http.post<Venda>(this.myAppUrl + this.myApiUrlCreate, JSON.stringify(venda), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  updateVenda(venda): Observable<Venda> {
    return this.http.post<Venda>(this.myAppUrl + this.myApiUrlUpdate, JSON.stringify(venda), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  deleteVenda(bebidaId: string): Observable<Venda> {
    return this.http.delete<Venda>(this.myAppUrl + this.myApiUrlDelete + bebidaId)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  adicionaVenda(estoque): Observable<Estoque> {
    debugger;
    return this.http.post<Estoque>(this.myAppUrl + this.myApiUrlAddEstoque, JSON.stringify(estoque), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }
  removeVenda(estoque): Observable<Estoque> {
    return this.http.post<Estoque>(this.myAppUrl + this.myApiUrlRemoveEstoque, JSON.stringify(estoque), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
