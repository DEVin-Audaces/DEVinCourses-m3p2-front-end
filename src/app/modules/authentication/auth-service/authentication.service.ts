import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UsersService } from '../../public/services/user-service/users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private url = environment.API_URL ;

  constructor(
    private _http : HttpClient,
    private _userService: UsersService
  ) { }

  public autenticar(usuario: string, senha: string): Observable<HttpResponse<any>> {
    return this._http
        .post(
            `${environment.API_URL}/user/login`,
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
