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
      this.getUser();
    }
  }

  getUser(): Observable<Users|null>{
    this._http.get<Users>(`${this.url}/users/UserProfile`).subscribe(
      x => this.userData$ = x
    );
    this.userSubject$.next(this.userData$);
    return this.userSubject$.asObservable();
  }

  updateUser(data: Users){
    this._http.put<Users>(`${this.url}/users/}`, data).subscribe(
      x => this.userData$ = x
      );
      this.userSubject$.next(this.userData$);
  }

  public logout(): void{
    this._token.removeToken();
    this.userSubject$.next(null);
  }

  public isLoged(): boolean{
    return this._token.hasToken();
  }
  public saveToken(token: string): void {
    this._token.saveToken(token);
  }



}
