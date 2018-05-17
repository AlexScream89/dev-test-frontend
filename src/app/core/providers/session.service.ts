import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';

@Injectable()
export class SessionService {

  constructor(
    private localStorageService: LocalStorageService
  ) {}

  public setToken(token: string): void {
    this.localStorageService.set('token', token);
  }

  public getToken(): string {
    return this.localStorageService.get('token');
  }
}
