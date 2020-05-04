import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { TipoBebida } from '../models/tipobebida';

@Injectable({
  providedIn: 'root'
})
export class TipoBebidaService {

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
    this.myApiUrl = '/tipoBebida/list/';
    this.myApiUrl1 = '/tipoBebida/listone/';
    this.myApiUrlCreate = '/tipoBebida/create/';
    this.myApiUrlUpdate = '/tipoBebida/update/';
    this.myApiUrlDelete = '/tipoBebida/delete/';
  }

  getTipoBebidas(): Observable<TipoBebida[]> {
    return this.http.get<TipoBebida[]>(this.myAppUrl + this.myApiUrl)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  getTipoBebida(tipoBebidaId: string): Observable<TipoBebida> {
    return this.http.get<TipoBebida>(this.myAppUrl + this.myApiUrl1 + tipoBebidaId)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  saveTipoBebida(tipoBebida): Observable<TipoBebida> {
    return this.http.post<TipoBebida>(this.myAppUrl + this.myApiUrlCreate, JSON.stringify(tipoBebida), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  updateTipoBebida(tipoBebida): Observable<TipoBebida> {
    return this.http.post<TipoBebida>(this.myAppUrl + this.myApiUrlUpdate, JSON.stringify(tipoBebida), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  }

  deleteTipoBebida(tipoBebidaId: string): Observable<TipoBebida> {
    return this.http.delete<TipoBebida>(this.myAppUrl + this.myApiUrlDelete + tipoBebidaId)
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
