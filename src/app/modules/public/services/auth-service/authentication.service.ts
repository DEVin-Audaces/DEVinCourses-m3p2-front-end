import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { UserService } from '../user-service/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private _http : HttpClient,
    private _userService: UserService
  ) { }

  public autenticar(usuario: string, senha: string): Observable<HttpResponse<any>> {
    return this._http
        .post(
            `${environment.API}/user/login`,
            {
                userName: usuario,
                password: senha,
            },
            { observe: 'response' }
        )
        .pipe(
            tap((response) => {
                const token = response.headers.get('x-access-token') ?? '';
                this._userService.saveToken(token);
            })
        );
}
}
