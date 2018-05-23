import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { SessionService } from './session.service';
import { Observable } from 'rxjs';
import 'rxjs-compat/add/operator/do';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private sessionService: SessionService
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Get the auth token from the service.
    const authToken = this.sessionService.getToken();

    if (authToken) {
      // Clone the request and replace the original headers with
      // cloned headers, updated with the authorization.
      const authReq = req.clone({
        headers: req.headers.set('Authorization', `Token ${authToken}`)
      });

      // send cloned request with header to the next handler.
      return next.handle(authReq).do(null, err => this.handle401(err));
    }

    return next.handle(req);
  }

  private handle401(err: any): void {
    if (err instanceof HttpErrorResponse) {
      if (err.status === 401) {
        this.sessionService.setToken(null);
        this.sessionService.setUserData(null);
      }
    }
  }
}
