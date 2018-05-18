import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/providers/auth.service';
import { SessionService } from '../../core/providers/session.service';
import {
  AuthService as SocialAuthService,
  FacebookLoginProvider,
  GoogleLoginProvider
} from 'angular5-social-login';
import { Router } from '@angular/router';

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
    private sessionService: SessionService,
    private socialAuthService: SocialAuthService,
    private router: Router
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
        this.router.navigate(['/dashboard']);
      });
  }

  public socialSignIn(socialPlatform: string) {
    let socialPlatformProvider;
    if (socialPlatform === 'facebook') {
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    } else if (socialPlatform === 'google') {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }

    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform +  'sign in data : ' , userData);
        this.sessionService.setToken(userData['token']);
        this.router.navigate(['/dashboard']);
      },
      err => {
        console.log('error', err);
      }
    );
  }

  private createForm(): void {
    this.loginForm = this.fb.group({
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', Validators.required]
    });
  }

}
