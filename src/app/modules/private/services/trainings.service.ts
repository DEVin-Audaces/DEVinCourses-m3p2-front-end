import { Report } from './../../../interfaces/report';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Training } from 'src/app/interfaces/training';
import { RegisteredUsers } from 'src/app/interfaces/registeredUsers';

@Injectable({
  providedIn: 'root'
})
export class TrainingsService {

  private url = `${environment.API_URL}/trainings`;

  constructor(private _http: HttpClient) { }

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
    return this._http.put(`${this.url}/suspend/${trainingId}`,{});
  }

  public getAllTrainings(): Observable<Training[]> {
    return this._http.get<Training[]>(this.url);
  }
}
