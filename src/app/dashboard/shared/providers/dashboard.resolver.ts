import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { DashboardService } from './dashboard.service';

@Injectable()
export class DashboardResolver implements Resolve<any> {
  constructor(private dashboardService: DashboardService) {}
  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.dashboardService.getTrips();
  }
}
