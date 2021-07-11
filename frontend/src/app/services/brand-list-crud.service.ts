import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { catchError, tap } from "rxjs/operators";

import { Brand } from "../models/Brand";
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class BrandListCrudService {

  private url = "http://localhost:3000/brands";

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(private errorHandlerService: ErrorHandlerService, private http: HttpClient) { }

  fetchAll(): Observable <Brand[]> {

    return this.http
      .get<Brand[]>(this.url, { responseType: "json"})
      .pipe(
        tap((_) => console.log('fetched brands')),
        catchError(
            this.errorHandlerService.handleError<Brand[]>("fetchAll", [])
        )
      );

  }

  post(brand: Omit<Brand, "id">): Observable<any> {
    return this.http
      .post<Omit<Brand, "id">>(this.url, brand, this.httpOptions)
      .pipe(catchError(this.errorHandlerService.handleError<any>("post")));
  }

  update(brand: Brand): Observable<any> {
    return this.http
      .put<Brand>(this.url, brand, this.httpOptions)
      .pipe(catchError(this.errorHandlerService.handleError<any>("update")));
  }
  
  delete(id: number): Observable<any>{

    const url = `http://localhost:3000/brands/${id}`;

    return this.http
    .delete<Brand>(url, this.httpOptions)
    .pipe(catchError(this.errorHandlerService.handleError<any>("delete")));

  }
  
}
