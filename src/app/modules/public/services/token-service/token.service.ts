import { Injectable } from '@angular/core';

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

public possuiToken(): boolean {
    return !!this.returnToken();
}
}
