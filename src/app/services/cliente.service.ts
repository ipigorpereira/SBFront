import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  myAppUrl: string;
  myApiUrl: string;
  myApiUrl1: string;
  myApiUrlCreate: string;
  myApiUrlUpdate: string;
  myApiUrlDelete: string;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    })
  };
  constructor(private http: HttpClient) {
    this.myAppUrl = environment.appUrl;
    this.myApiUrl = '/cliente/list/';
    this.myApiUrl1 = '/cliente/listone/';
    this.myApiUrlCreate = '/cliente/create/';
    this.myApiUrlUpdate = '/cliente/update/';
    this.myApiUrlDelete = '/cliente/delete/';
  }

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.myAppUrl + this.myApiUrl)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  getCliente(clienteId: string): Observable<Cliente> {
    return this.http.get<Cliente>(this.myAppUrl + this.myApiUrl1 + clienteId)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  saveCliente(cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.myAppUrl + this.myApiUrlCreate, JSON.stringify(cliente), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  updateCliente(cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.myAppUrl + this.myApiUrlUpdate, JSON.stringify(cliente), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  deleteCliente(clienteId: string): Observable<Cliente> {
    return this.http.delete<Cliente>(this.myAppUrl + this.myApiUrlDelete + clienteId)
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
