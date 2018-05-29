import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Trip } from '../core/models/trip.model';
import { TripService } from './shared/providers/trip.service';
import { Place } from '../core/models/place.model';
import { HelperService } from '../core/providers/helper.service';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.scss']
})
export class TripComponent implements OnInit {

  public tripForm: FormGroup;
  public trip: Trip;
  public items: any = [];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private tripService: TripService,
    private helperService: HelperService
  ) {
    this.trip = this.route.snapshot.data['trip'];
    console.log('trip', this.trip);
    const place = this.trip ? this.trip.places[0] : null;
    this.createForm(place);
    if (place) {
      this.trip.places.forEach((item, index) => {
        if (index > 0) {
          this.addCreatePlaceForm(item);
        }
      });
    }
  }

  ngOnInit() {
  }

  public submitForm(): void {
    this.tripForm.value.places = this.tripForm.value.places.map(place => {
      return {
        ...place,
        beginAt: this.helperService.prepareDate(place.beginAt),
        endAt: this.helperService.prepareDate(place.endAt)
      };
    });
    console.log('form', this.tripForm.value);
    if (this.tripForm.invalid) {
      return;
    }

    this.tripService.createTrip(this.tripForm.value).subscribe(res => {
      console.log('res', res);
      this.router.navigate(['/dashboard']);
    });
  }

  public fileUpload(event, index): void {
    console.log('index', index);

    const fileList: FileList = event.target.files;
    console.log('file list', fileList);
    if (fileList.length > 0) {
      const file: File = fileList[0];
      const formData: FormData = new FormData();
      formData.append('file', file, file.name);
      this.tripService.uploadImage(formData).subscribe(res => {
        this.tripForm.value.places[index]['imageUrl'].push(res);
      });
    }
  }

  public backToDashboard(): void {
    this.router.navigate(['/dashboard']);
  }

  private createForm(place: Place): void {
    this.tripForm = this.fb.group({
      'title': [this.trip ? this.trip.title : '', [Validators.required]],
      'places': this.fb.array([this.createPlaceForm(place)])
    });
  }

  private createPlaceForm(place: Place): FormGroup {
    return this.fb.group({
      'country': [place ? place.country : '', [Validators.required]],
      'city': [place ? place.city : '', [Validators.required]],
      'beginAt': [place ? this.helperService.transformDate(place.beginAt) : '', [Validators.required]],
      'endAt': [place ? this.helperService.transformDate(place.endAt) : '', [Validators.required]],
      'imageUrl': [[]]
    });
  }

  private addCreatePlaceForm(place: Place): void {
    this.items = this.tripForm.get('places') as FormArray;
    this.items.push(this.createPlaceForm(place));
  }

}
