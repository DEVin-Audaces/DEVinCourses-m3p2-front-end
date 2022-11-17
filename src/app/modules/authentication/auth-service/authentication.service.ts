import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
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


  public autenticar(email: string, senha: string): Observable<any> {

  return this._http.get(
    `${this.url}/users/LoginUser?Email=${email}&Password=${senha}`,{ observe: 'response' }).pipe(
      catchError(this.handleError)
    )
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status == 0)
      return of({ status: 600, body: "Unexpected error. If this problem persists, please contact ..." })
    else      return of({ status: error.status, body: error.error });
  }
}
