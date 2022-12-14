import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
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

  public createUser(formData: Users){
    this._http.post<Users>(`${this.url}/users/CreateUser`, formData).subscribe(x => this.userData$ = x
    );
    this.userSubject$.next(this.userData$);
    return this.userSubject$.asObservable();
  }

  getUser(): Observable<Users|null>{
    this._http.get<Users>(`${this.url}/users/UserProfile`).subscribe(
      x => this.userData$ = x
    );
    this.userSubject$.next(this.userData$);
    return this.userSubject$.asObservable();
  }

  getUserLogin(): Observable<any|null>{
    return this._http.get<any>(`${this.url}/users/UserProfile`).pipe(
      map(
        res => res
      )
    )
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

  changeUserPassword(email:string, password: string):Observable<any>{
    return this._http.post(`${this.url}/users/ResetPassword/`, {email, password});
  }

  postImg(myFormData: any) {
    this._http.put(`${this.url}/users/UploadImgUser`, myFormData , {
      headers : {
        'content-type': '*'
      }
    }).subscribe(data => {
      console.log(data);
    });
  }

}
