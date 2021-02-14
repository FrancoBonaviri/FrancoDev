import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { ErrorGlobal } from '../models/ErrorGlobal';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  URL: string = environment.URL_API

  constructor( private http: HttpClient) { }



  SendEmail(message, name, email) {

    // Creo el body ->
    const body = {
      message,
      name,
      email
    }


    return this.http.post<any>(this.URL + 'sendemail', body)
    .pipe(
      catchError( this.handleError<ErrorGlobal>("SendEmail"))
    )
  }






  //Catch generico ->
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<any> => {
      var err = new ErrorGlobal(error.message, error.status);
      return throwError(err);
    };
  }
}
