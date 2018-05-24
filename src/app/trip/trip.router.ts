import { Routes } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { TripComponent } from './trip.component';

export const tripRoutes: Routes = [
  {
    path: '',
    component: TripComponent,
    canActivate: [AuthGuard]
  }
];
