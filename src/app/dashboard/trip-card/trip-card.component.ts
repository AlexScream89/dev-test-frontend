import { Component, Input, OnInit } from '@angular/core';
import { Trip } from '../../core/models/trip.model';

@Component({
  selector: 'app-trip-card',
  templateUrl: './trip-card.component.html',
  styleUrls: ['./trip-card.component.scss']
})
export class TripCardComponent implements OnInit {

  @Input() trip: Trip;

  constructor() { }

  ngOnInit() {}

  public editCard(): void {
    console.log('edit sard');
  }

}
