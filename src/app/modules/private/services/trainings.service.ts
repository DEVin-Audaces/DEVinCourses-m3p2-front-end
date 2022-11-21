import { Report } from './../../../interfaces/report';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Training } from 'src/app/interfaces/training';
import { environment } from 'src/environments/environment';
import { RegisteredUsers } from 'src/app/interfaces/registeredUsers';

@Injectable({
  providedIn: 'root'
})
export class TrainingsService {

  private url = `${environment.API_URL}/trainings`;

  constructor(private _http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error.error);

      return of(error);
    };
  }

  public getReport(): Observable<Report[]> {
    return this._http.get<Report[]>(`${this.url}/report`);
  }

  public postTraining(training: Training): Observable<Training> {
    return this._http.post<Training>(this.url, training);
  }

  public getTrainingById(trainingId: string): Observable<Training> {
    return this._http.get<Training>(`${this.url}/${trainingId}`);
  }

  public getUsersRegisteredInTraining(trainingId: string): Observable<RegisteredUsers> {
    return this._http.get<RegisteredUsers>(`${this.url}/${trainingId}/registered-users`);
  }

  public suspendTraining(trainingId: string): Observable<any> {
    return this._http.put(`${this.url}/suspend/${trainingId}`, {});
  }

  public getAllTrainings(): Observable<Training[]> {
    return this._http.get<Training[]>(this.url);
  }

  completeTraining(userId: string, trainingId: string): Observable<HttpResponse<any>> {
    return this._http.put(
      `${this.url}/complete?UserId=${userId}&TrainingId=${trainingId}`, {}, { observe: 'response' })
      .pipe(
        tap(x => x),
        catchError(this.handleError<any>())
      );
  }

  completeTopic(userId: string, topicId: string | undefined): Observable<HttpResponse<any>> {
    const topicIdteste = "A970BD95-000B-48FE-8AC5-0B19620E904E"

    return this._http.put(
      `${this.url}/completeTopic/${userId}/${topicIdteste}`, {}, { observe: 'response' })
      .pipe(
        tap(x => x),
        catchError(this.handleError<any>())
      );
  }
} 
