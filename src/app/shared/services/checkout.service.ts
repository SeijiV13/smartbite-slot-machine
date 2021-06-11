import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Session } from '../models/session';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(private http: HttpClient) { }

  checkoutCredits(id: string): Observable<{session: Session, message: string}> {
       return this.http.post(`${environment.apiURL}/checkout`, {id}).pipe(
         tap((data: {session: Session, message: string}) => data),
         catchError((error) => throwError(error))
       )

     }

  }

