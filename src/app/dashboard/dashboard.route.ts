import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DashboardResolver } from './shared/providers/dashboard.resolver';
import {AuthGuard} from '../core/guards/auth.guard';

export const dashboardRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    resolve: {
      trips: DashboardResolver
    }
  }
];
