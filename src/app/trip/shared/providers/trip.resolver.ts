import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { TripService } from './trip.service';

@Injectable()
export class TripResolver implements Resolve<any> {
  constructor(private tripService: TripService) {}
  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const id = route.params.id;
    return this.tripService.getTrip(id);
  }
}
