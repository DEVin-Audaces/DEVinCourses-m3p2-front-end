import { Report } from './../../../interfaces/report';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Training } from 'src/app/interfaces/training';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrainingsService {

  private url = `${environment.API_URL}/trainings`;

  constructor(private _http: HttpClient) { }

  public getReport(): Observable<Report[]> {
    return this._http.get<Report[]>('https://localhost:7200/trainings/report');
  }

  public getAllTrainings(): Observable<Training[]> {
    return this._http.get<Training[]>(this.url);
  }

}
