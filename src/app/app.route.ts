import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: 'auth/login', loadChildren: './auth/login/login.module#LoginModule'},
  { path: '**', loadChildren: './auth/login/login.module#LoginModule'}
];
