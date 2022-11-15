import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../modules/public/services/token-service/token.service';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {


  constructor(private _tokenService: TokenService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if (this._tokenService.hasToken() == true) {
        const token = this._tokenService.returnToken();
        const headers = new HttpHeaders().set('content-type', 'application/json')
                                         .set('Access-Control-Allow-Origin', '*')
                                         .set('Authorization', 'Bearer ' + token )
                                         .set('withCredentials', 'true' );
      request = request.clone({ headers });
    }

    return next.handle(request);
  }
}
