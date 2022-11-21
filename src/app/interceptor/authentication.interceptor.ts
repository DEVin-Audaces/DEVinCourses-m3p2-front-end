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


  constructor(private _tokenService: TokenService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const endPointUploadName = request.url.split("/").reverse()[0]
    if (this._tokenService.hasToken() == true) {
      const token = this._tokenService.returnToken();
      const contentType = endPointUploadName !== 'UploadImgUser'
      let headers = new HttpHeaders()
        .set('Access-Control-Allow-Origin', '*')
        .set('Authorization', 'Bearer ' + token)
        .set('withCredentials', 'true');
      if (contentType) {
        headers = headers.set("Content-Type", "application/json")
      }
      request = request.clone({ headers });
    }

    return next.handle(request);
  }
}
