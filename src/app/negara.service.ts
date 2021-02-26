import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class NegaraService {

  constructor(private http: HttpClient) { }
  configUrl = 'https://restcountries.eu/rest/v2';
  
  getAllDatas() {
    return this.http.get(this.configUrl+ '/all/')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

// Error handling 
handleError(error) {
  let errorMessage = '';
  if(error.error instanceof ErrorEvent) {
    // Get client-side error
    errorMessage = error.error.message;
  } else {
    // Get server-side error
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  window.alert(errorMessage);
  return throwError(errorMessage);
}

}
