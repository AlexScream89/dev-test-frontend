import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule'},
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'},
  { path: 'settings', loadChildren: './settings/settings.module#SettingsModule'},
  { path: '**', loadChildren: './auth/auth.module#AuthModule'}
];
