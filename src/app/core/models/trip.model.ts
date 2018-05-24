import { Place } from './place.model';

export class Trip {
  public id: string;
  public title: string;
  public places: Place;

  constructor(data) {
    this.id = data._id;
    this.title = data.title;
    if (data.places) {
      this.places = data.places.map(place => new Place(place));
    }
  }
}
