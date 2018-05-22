import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DashboardResolver } from './shared/providers/dashboard.resolver';

export const dashboardRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    resolve: {
      trips: DashboardResolver
    }
  }
];
