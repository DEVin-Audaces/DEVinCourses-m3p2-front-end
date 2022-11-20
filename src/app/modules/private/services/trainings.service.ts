import { Report } from './../../../interfaces/report';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrainingsService {

  constructor(private _http: HttpClient) { }

  public getReport(): Observable<Report[]> {
    return this._http.get<Report[]>('https://localhost:7200/trainings/report');
  }
}
