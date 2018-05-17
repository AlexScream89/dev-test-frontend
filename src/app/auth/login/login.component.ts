import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/providers/auth.service';
import { SessionService } from '../../core/providers/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private sessionService: SessionService
  ) {
    this.createForm();
  }

  ngOnInit() {}

  public submitForm(): void {
    console.log('form value', this.loginForm.value);
    this.authService.login(this.loginForm.value)
      .subscribe(res => {
        console.log(res);
        this.sessionService.setToken(res['token']);
      });
  }

  public isInvalid(controlName: string): boolean {
    return this.loginForm.controls[controlName].touched && this.loginForm.controls[controlName].invalid;
  }

  private createForm(): void {
    this.loginForm = this.fb.group({
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', Validators.required]
    });
  }

}
