import { Place } from './place.model';

export class Trip {
  public title: string;
  public places: Place;

  constructor(data) {
    this.title = data.title;
    if (data.places) {
      this.places = data.places.map(place => new Place(place));
    }
  }
}
