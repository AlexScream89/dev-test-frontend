import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ConfigService } from '../../../core/providers/config.service';

@Injectable()
export class DashboardService {

  constructor(private http: HttpClient) {}

  getDashboard() {
    return this.http.get(`${ConfigService.basePath}/dashboard`)
      .pipe(map(res => res));
  }
}
