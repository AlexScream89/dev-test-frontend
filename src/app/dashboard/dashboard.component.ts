import { Component, OnInit } from '@angular/core';
import { DashboardService } from './shared/providers/dashboard.service';
import { ActivatedRoute } from '@angular/router';
import { Trip } from '../core/models/trip.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public trips: Trip;

  constructor(
    private dashboardService: DashboardService,
    private route: ActivatedRoute
  ) {
    this.trips = this.route.snapshot.data['trips'];
  }

  ngOnInit() {}

}
