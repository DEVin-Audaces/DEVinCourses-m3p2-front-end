import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { loginReturn } from 'src/app/interfaces/loginReturn';
import { environment } from 'src/environments/environment';
import { UsersService } from '../../public/services/user-service/user-service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private url = environment.API_URL ;

  constructor(
    private _http : HttpClient,
    private _userService: UsersService
  ) { }

  public autenticar(email: string, senha: string): Observable<loginReturn>{

  return this._http.get(
    `${this.url}/users/LoginUser?Email=${email}&Password=${senha}`,

      // {observe: 'response'}
      )
      .pipe(
          tap((response) => {
            if(response == null || response == undefined){
              return
            }
              const token = response.accessToken;
              this._userService.saveToken(token!)
          })
        )

  }
}
