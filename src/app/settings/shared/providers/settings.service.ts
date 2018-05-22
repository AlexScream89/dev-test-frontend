import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../../../core/providers/config.service';
import { map } from 'rxjs/operators';
import {Observable} from 'rxjs';
import {User} from '../../../core/models/user.model';

@Injectable()
export class SettingsService {

  constructor(private http: HttpClient) { }

  public getUser(id: string): Observable<User> {
    return this.http.get(`${ConfigService.basePath}/users/${id}`)
      .pipe(map(response => {
        return new User(response['data']);
      }));
  }

  public updateUser(id: string, body: Object) {
    return this.http.patch(`${ConfigService.basePath}/users/${id}`, body)
      .pipe(map(response => {
        return response;
      }));
  }
}
