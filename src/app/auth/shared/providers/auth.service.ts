import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../../../core/providers/config.service';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  public login(body: Object) {
    return this.http.post(`${ConfigService.basePath}/users/login`, body)
      .pipe(map(response => {
        return response;
      }));
  }

  public loginWithSocial(body: Object, platform: string) {
    return this.http.post(`${ConfigService.basePath}/users/login/${platform}`, body)
      .pipe(map(response => {
        return response;
      }));
  }

  public registration(body: Object) {
    return this.http.post(`${ConfigService.basePath}/users/registration`, body)
      .pipe(map(response => {
        return response;
      }));
  }

  public forgotPassword(body: Object) {
    return this.http.post(`${ConfigService.basePath}/users/forgot-password`, body)
      .pipe(map(response => {
        return response;
      }));
  }
}
