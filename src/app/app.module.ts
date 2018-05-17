import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.route';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { LocalStorageModule } from 'angular-2-local-storage';
import {SessionService} from './core/providers/session.service';
import {AuthInterceptor} from './core/providers/auth-interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot(),
    LocalStorageModule.withConfig({
      prefix: 'dev-test-app',
      storageType: 'localStorage'
    }),
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    SessionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
