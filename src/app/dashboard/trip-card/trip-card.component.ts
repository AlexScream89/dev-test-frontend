import { Component, Input, OnInit } from '@angular/core';
import { Trip } from '../../core/models/trip.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trip-card',
  templateUrl: './trip-card.component.html',
  styleUrls: ['./trip-card.component.scss']
})
export class TripCardComponent implements OnInit {

  @Input() trip: Trip;

  constructor(private router: Router) { }

  ngOnInit() {}

  public editCard(): void {
    this.router.navigate(['/trip', this.trip.id, 'edit']);
  }

}
