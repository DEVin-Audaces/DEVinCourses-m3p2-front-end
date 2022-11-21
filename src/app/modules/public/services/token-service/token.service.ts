import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { UserJwtData } from 'src/app/interfaces/userJwtData';

const KEY = 'bearer';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  public returnToken(): string {
    return localStorage.getItem(KEY) ?? '';
  }

  public saveToken(token: string): void {
    localStorage.setItem(KEY, token);
  }

  public removeToken(): void {
    localStorage.removeItem(KEY);
  }

  public hasToken(): boolean {
    return !!this.returnToken();
  }

  public returnJwtData(): UserJwtData{
    const user: UserJwtData = this.jwtDecoder();
    return user;
  }

  private jwtDecoder(): UserJwtData{
    const token = this.returnToken();
    const userInfo: any = jwtDecode(token);
    let user: UserJwtData = { id: userInfo.jti, email: userInfo.unique_name};
    return user;
  }

}
