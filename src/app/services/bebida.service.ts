import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Bebida } from '../models/bebida';
import { Estoque } from '../models/estoque';

@Injectable({
  providedIn: 'root'
})
export class BebidaService {

  myAppUrl: string;
  myApiUrl: string;
  myApiUrl1: string;
  myApiUrlCreate: string;
  myApiUrlUpdate: string;
  myApiUrlDelete: string;
  myApiUrlRemoveEstoque: string;
  myApiUrlAddEstoque: string;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    })
  };
  constructor(private http: HttpClient) {
    this.myAppUrl = environment.appUrl;
    this.myApiUrl = '/bebida/listcompleto/';
    this.myApiUrl1 = '/bebida/listone/';
    this.myApiUrlCreate = '/bebida/create/';
    this.myApiUrlUpdate = '/bebida/update/';
    this.myApiUrlDelete = '/bebida/delete/';
    this.myApiUrlAddEstoque = '/estoque/adiciona/';
    this.myApiUrlRemoveEstoque = '/estoque/remove/';
  }

  getBebidas(): Observable<Bebida[]> {
    return this.http.get<Bebida[]>(this.myAppUrl + this.myApiUrl)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  getBebida(bebidaId: string): Observable<Bebida> {
    return this.http.get<Bebida>(this.myAppUrl + this.myApiUrl1 + bebidaId)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  saveBebida(bebida): Observable<Bebida> {
    return this.http.post<Bebida>(this.myAppUrl + this.myApiUrlCreate, JSON.stringify(bebida), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  updateBebida(bebida): Observable<Bebida> {
    return this.http.post<Bebida>(this.myAppUrl + this.myApiUrlUpdate, JSON.stringify(bebida), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  deleteBebida(bebidaId: string): Observable<Bebida> {
    return this.http.delete<Bebida>(this.myAppUrl + this.myApiUrlDelete + bebidaId)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  adicionaBebida(estoque): Observable<Estoque> {
    return this.http.post<Estoque>(this.myAppUrl + this.myApiUrlAddEstoque, JSON.stringify(estoque), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }
  removeBebida(estoque): Observable<Estoque> {
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
