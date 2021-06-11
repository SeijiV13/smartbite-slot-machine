import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Roll } from '../models/roll';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RollService {

  constructor(private http: HttpClient) { }

  rollSlots(id: string): Observable<Roll> {
    return this.http.post(`${environment.apiURL}/roll/roll-slots`, {id}).pipe(
      tap((data: Roll) => data),
      catchError((error) => throwError(error))
    )

  }
}
