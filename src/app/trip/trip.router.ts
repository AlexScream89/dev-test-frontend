import { Routes } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { TripComponent } from './trip.component';
import { TripResolver } from './shared/providers/trip.resolver';

export const tripRoutes: Routes = [
  {
    path: '',
    component: TripComponent,
    canActivate: [AuthGuard]
  },
  {
    path: ':id/edit',
    component: TripComponent,
    canActivate: [AuthGuard],
    resolve: {
      trip: TripResolver
    }
  }
];
