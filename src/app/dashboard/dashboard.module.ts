import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { dashboardRoutes } from './dashboard.route';
import { DashboardService } from './shared/providers/dashboard.service';
import { SharedModule } from '../shared/shared.module';
import { TripCardComponent } from './trip-card/trip-card.component';
import { DashboardResolver } from './shared/providers/dashboard.resolver';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(dashboardRoutes),
    SharedModule
  ],
  declarations: [
    DashboardComponent,
    TripCardComponent
  ],
  providers: [
    DashboardService,
    DashboardResolver
  ]
})
export class DashboardModule { }
