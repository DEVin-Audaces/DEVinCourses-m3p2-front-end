import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private readonly ApiPath = `${environment.API_URL}/trainings`;

  constructor(private _httpClient: HttpClient) { }

  public create(treinamemto: any){
    return this._httpClient.post(`${this.ApiPath}/registration`, treinamemto).pipe(take(1));
  }

  public loadById(id: any){
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


}
