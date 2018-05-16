import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../../../core/providers/config.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public login(body) {
    return this.http.post(`${ConfigService.basePath}`, body)
      .pipe(map(response => {
        return response;
      }));
  }
}
