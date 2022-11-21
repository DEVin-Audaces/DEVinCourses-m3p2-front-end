import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, take, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private readonly ApiPath = `${environment.API_URL}/trainings`;

  constructor(private _httpClient: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error.error);

      return of(error);
    };
  }

  public create(treinamemto: any) {
    return this._httpClient.post(`${this.ApiPath}/registration`, treinamemto).pipe(take(1));
  }

  public loadById(id: any) {
    return new Promise((resolve, reject) => {
      this._httpClient.get(`${this.ApiPath}/${id}`)
        .toPromise()
        .then(
          (data: any) => {
            resolve(data)
          },
          (erro) => {
            reject(erro);
          }
        );
    });
  }

  unRegisterTraining(userId: string, trainingId: string) : Observable<HttpResponse<any>> {
    
    return this._httpClient.delete(
      `${this.ApiPath}/registration/${userId}/${trainingId}`, { observe: 'response' })
      .pipe(
        tap(x => x),
        catchError(this.handleError<any>())
      );
  }

}
