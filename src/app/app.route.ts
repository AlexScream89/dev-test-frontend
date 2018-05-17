import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule'},
  { path: '**', loadChildren: './auth/auth.module#AuthModule'}
];
