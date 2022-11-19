import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';
import { Training } from 'src/app/interfaces/training';

@Injectable({
  providedIn: 'root'
})

export class ProfileService {

  private readonly ApiPath = `${environment.API_URL}/trainings/list`;

  constructor(private _httpClient: HttpClient) { }

  public loadByUserId(userId: any) {
    return new Promise((resolve, reject) => {
      this._httpClient.get<Training[]>(`${this.ApiPath}/${userId}`)
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
