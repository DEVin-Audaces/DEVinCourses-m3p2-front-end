import { UsersService } from '../../public/services/user-service/user-service';
import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationGuard implements CanLoad {
  constructor(private _userService: UsersService, private _router: Router) {}

  canLoad(route: Route, segments: UrlSegment[]): boolean {
    if (this._userService.isLoged() == false) {
      this._router.navigate(['']);
      return false;
    }

    return true;
  }
}
