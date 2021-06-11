import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap, catchError } from 'rxjs/operators'
import { Session } from '../models/session';
@Injectable({
  providedIn: 'root'
})
export class SessionService {

constructor(private http: HttpClient) { }
credits = 0;
account = 0;
checkSession(id: string): Observable<Session> {
     return this.http.post(`${environment.apiURL}/session/check-session`, {id}).pipe(
       tap((data: Session) => data),
       catchError((error) => throwError(error))
     )

   }

 getSesssionId(): string {
   return localStorage.getItem("sid");
 }

 setSessionId(id: string): void {
   localStorage.setItem("sid", id);
 }

}

