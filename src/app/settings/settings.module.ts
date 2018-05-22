import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { RouterModule } from '@angular/router';
import { settingsRoutes } from './settings.route';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(settingsRoutes)
  ],
  declarations: [SettingsComponent]
})
export class SettingsModule { }
