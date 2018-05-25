import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Trip } from '../core/models/trip.model';
import { TripService } from './shared/providers/trip.service';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.scss']
})
export class TripComponent implements OnInit {

  public tripForm: FormGroup;
  public trip: Trip;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private tripService: TripService
  ) {
    this.trip = this.route.snapshot.data['trip'];
    console.log('trip', this.trip);
    this.createForm();
  }

  ngOnInit() {
  }

  public submitForm(): void {
    if (this.tripForm.invalid) {
      return;
    }

    console.log('form', this.tripForm.value);
  }

  public fileUpload(event): void {
    const fileList: FileList = event.target.files;
    console.log('file list', fileList);
    if (fileList.length > 0) {
      const file: File = fileList[0];
      const formData: FormData = new FormData();
      formData.append('file', file, file.name);
      this.tripService.uploadImage(formData).subscribe();
    }
  }

  private createForm(): void {
    this.tripForm = this.fb.group({
      'title': [this.trip ? this.trip.title : '', [Validators.required]],
      'country': ['', [Validators.required]],
      'city': ['', [Validators.required]],
      'beginAt': ['', [Validators.required]],
      'endAt': ['', [Validators.required]]
    });
  }

}
