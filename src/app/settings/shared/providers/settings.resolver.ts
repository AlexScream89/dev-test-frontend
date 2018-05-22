import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { SettingsService } from './settings.service';
import { SessionService } from '../../../core/providers/session.service';

@Injectable()
export class SettingsResolver implements Resolve<any> {
  constructor(
    private settingsService: SettingsService,
    private sessionService: SessionService
  ) {}
  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const userId = this.sessionService.getUserData()['id'];
    return this.settingsService.getUser(userId);
  }
}
