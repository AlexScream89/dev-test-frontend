import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.scss']
})
export class TripComponent implements OnInit {

  public tripForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  ngOnInit() {
  }

  private createForm(): void {
    this.tripForm = this.fb.group({
      'title': ['', [Validators.required]],
      'country': ['', [Validators.required]],
      'city': ['', [Validators.required]],
      'beginAt': ['', [Validators.required]],
      'endAt': ['', [Validators.required]]
    });
  }

}
