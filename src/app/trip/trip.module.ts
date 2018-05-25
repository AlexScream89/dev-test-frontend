import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripComponent } from './trip.component';
import { RouterModule } from '@angular/router';
import { tripRoutes } from './trip.router';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TripService } from './shared/providers/trip.service';
import { TripResolver } from './shared/providers/trip.resolver';
import { PlaceComponent } from './place/place.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(tripRoutes),
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    TripComponent,
    PlaceComponent
  ],
  providers: [
    TripService,
    TripResolver
  ]
})
export class TripModule { }
