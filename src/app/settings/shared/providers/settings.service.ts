import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../../../core/providers/config.service';
import { map } from 'rxjs/operators';

@Injectable()
export class SettingsService {

  constructor(private http: HttpClient) { }

  public getUser(id: string) {
    return this.http.get(`${ConfigService.basePath}/users/${id}`)
      .pipe(map(response => {
        return response;
      }));
  }
}
