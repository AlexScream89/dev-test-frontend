import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/providers/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  public forgotPasswordForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.createForm();
  }

  ngOnInit() {
  }

  public submitForm(): void {
    console.log('form value', this.forgotPasswordForm.value);

    if (this.forgotPasswordForm.invalid) {
      return;
    }

    this.authService.forgotPassword(this.forgotPasswordForm.value)
      .subscribe(res => {
        this.router.navigate(['/auth', 'login']);
        console.log('res', res);
      });
  }

  private createForm(): void {
    this.forgotPasswordForm = this.fb.group({
      'email': ['', [Validators.required, Validators.email]]
    });
  }

}
