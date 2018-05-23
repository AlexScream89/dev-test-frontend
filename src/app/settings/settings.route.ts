import { Routes } from '@angular/router';
import { SettingsComponent } from './settings.component';
import { SettingsResolver } from './shared/providers/settings.resolver';
import { AuthGuard } from '../core/guards/auth.guard';

export const settingsRoutes: Routes = [
  {
    path: '',
    component: SettingsComponent,
    canActivate: [AuthGuard],
    resolve: {
      user: SettingsResolver
    }
  }
];
