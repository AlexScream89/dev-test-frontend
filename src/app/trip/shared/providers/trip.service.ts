import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../../../core/providers/config.service';
import { map } from 'rxjs/operators';
import { Trip } from '../../../core/models/trip.model';
import { Observable } from 'rxjs';

@Injectable()
export class TripService {

  constructor(private http: HttpClient) { }

  public getTrip(id: string): Observable<Trip> {
    return this.http.get(`${ConfigService.basePath}/trips/${id}`)
      .pipe(map(response => {
        return new Trip(response['data']);
      }));
  }

  public updateTrip(id: string, body: Object) {
    return this.http.patch(`${ConfigService.basePath}/trips/${id}`, body)
      .pipe(map(response => {
        return response;
      }));
  }

  public uploadImage(formData: FormData) {
    return this.http.post(`${ConfigService.basePath}/trips/image-upload`, formData)
      .pipe(map(response => {
        return response;
      }));
  }
}
