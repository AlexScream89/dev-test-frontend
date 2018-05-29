import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { InputValidationDirective } from '../core/directives/input-validation.directive';
import {ImageLinkPipe} from '../core/pipes/image-link.pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    SidebarComponent,
    HeaderComponent,
    InputValidationDirective,
    ImageLinkPipe
  ],
  exports: [
    SidebarComponent,
    HeaderComponent,
    InputValidationDirective,
    ImageLinkPipe
  ]
})
export class SharedModule { }
