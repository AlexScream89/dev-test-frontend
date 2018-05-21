import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  AuthService as SocialAuthService,
  FacebookLoginProvider,
  GoogleLoginProvider
} from 'angular5-social-login';
import { AuthService } from './shared/providers/auth.service';
import { SessionService } from '../core/providers/session.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})

export class AuthComponent implements OnInit {
  public pageName = 'login';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private sessionService: SessionService,
    private socialAuthService: SocialAuthService,
  ) {}

  ngOnInit() {
    this.route.url
      .subscribe(url => {
        this.pageName = url[0].path;
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
        this.authService.loginWithSocial(userData, socialPlatform)
          .subscribe(res => {
            console.log('login with social', res);
            this.router.navigate(['/dashboard']);
          });
      },
      err => {
        console.log('error', err);
      }
    );
    // this.authService.loginWithSocial(socialPlatform)
    //   .subscribe(res => {
    //     console.log('res', res);
    //   });
  }
}
