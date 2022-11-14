import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Users } from 'src/app/interfaces/user';
import { environment } from 'src/environments/environment';
import { TokenService } from '../token-service/token.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private url = environment.API_URL ;

  public userData$! : Users;
  private userSubject$ = new BehaviorSubject<Users|null>(null);

  constructor(
    private _token: TokenService,
    private _http: HttpClient
    ) {
      if(this._token.hasToken()){
        const data = this._token.returnJwtData();
        this.getUser(data.id);
      }
     }

    createUser(data: Users): Observable<any>{
      return this._http.post<any>(`${this.url}/users`, data);
    }

    updateUser(data: Users){
      this._http.put<Users>(`${this.url}/users/}`, data).subscribe(
        x => this.userData$ = x
        );
        this.userSubject$.next(this.userData$);
    }

    getUser(id: string): Observable<Users|null>{
      this._http.get<Users>(`${this.url}/users/${id}`).subscribe(
        x => this.userData$ = x
        );
      this.userSubject$.next(this.userData$);
      return this.userSubject$.asObservable();
    }

      changeUserPassword(email:string, password: string):Observable<any>{
      return this._http.post(`${this.url}/users/changepassword/${email}`, password);
    }

    public saveToken(token: string): void {
      this._token.saveToken(token);
    }

    public logout(): void{
      this._token.removeToken();
      this.userSubject$.next(null);
    }

    public isLoged(): boolean{
      return this._token.hasToken();
    }


}
