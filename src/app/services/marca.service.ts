import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Marca } from '../models/marca';

@Injectable({
  providedIn: 'root'
})
export class MarcaService {

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
    this.myApiUrl = '/marca/list/';
    this.myApiUrl1 = '/marca/listone/';
    this.myApiUrlCreate = '/marca/create/';
    this.myApiUrlUpdate = '/marca/update/';
    this.myApiUrlDelete = '/marca/delete/';
  }

  getMarcas(): Observable<Marca[]> {
    return this.http.get<Marca[]>(this.myAppUrl + this.myApiUrl)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  getMarca(marcaId: string): Observable<Marca> {
    return this.http.get<Marca>(this.myAppUrl + this.myApiUrl1 + marcaId)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  saveMarca(marca): Observable<Marca> {
    return this.http.post<Marca>(this.myAppUrl + this.myApiUrlCreate, JSON.stringify(marca), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  updateMarca(marca): Observable<Marca> {
    return this.http.post<Marca>(this.myAppUrl + this.myApiUrlUpdate, JSON.stringify(marca), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  deleteMarca(clienteId: string): Observable<Marca> {
    return this.http.delete<Marca>(this.myAppUrl + this.myApiUrlDelete + clienteId)
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
