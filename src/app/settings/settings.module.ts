import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { RouterModule } from '@angular/router';
import { settingsRoutes } from './settings.route';
import { SharedModule } from '../shared/shared.module';
import { SettingsService } from './shared/providers/settings.service';
import { SettingsResolver } from './shared/providers/settings.resolver';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(settingsRoutes),
    SharedModule
  ],
  declarations: [SettingsComponent],
  providers: [
    SettingsService,
    SettingsResolver
  ]
})
export class SettingsModule { }
