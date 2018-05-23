import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ConfigService } from '../../../core/providers/config.service';
import { Trip } from '../../../core/models/trip.model';

@Injectable()
export class DashboardService {

  constructor(private http: HttpClient) {}

  public getDashboard() {
    return this.http.get(`${ConfigService.basePath}/dashboard`)
      .pipe(map(response => {
        return response;
      }));
  }

  public getTrips() {
    return this.http.get(`${ConfigService.basePath}/trips`)
      .pipe(map(response => {
        return response['data'].map(trip => new Trip(trip));
      }));
  }
}
