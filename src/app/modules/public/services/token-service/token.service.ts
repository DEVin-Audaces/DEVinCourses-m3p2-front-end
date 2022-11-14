import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { userJwtData } from 'src/app/interfaces/userJwtData';

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

  public returnJwtData(): userJwtData{
    const user: userJwtData = this.jwtDecode();
    return user;
  }

  private jwtDecode(): userJwtData{
    const token = this.returnToken();
    const user: userJwtData = jwtDecode(token);
    return user;
  }
}
