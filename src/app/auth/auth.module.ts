import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { authRoutes } from './auth.route';
import { RegistrationComponent } from './registration/registration.component';
import { AuthService } from './shared/providers/auth.service';
import { InputValidationDirective } from '../core/directives/input-validation.directive';

@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
    InputValidationDirective
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(authRoutes),
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthService],
  bootstrap: []
})
export class AuthModule { }
