import { Routes } from '@angular/router';
import { SettingsComponent } from './settings.component';
import { SettingsResolver } from './shared/providers/settings.resolver';

export const settingsRoutes: Routes = [
  {
    path: '',
    component: SettingsComponent,
    resolve: {
      user: SettingsResolver
    }
  }
];
