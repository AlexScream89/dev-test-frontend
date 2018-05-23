export class Place {
  public imageUrl: string;
  public country: string;
  public city: string;
  public month: string;

  constructor(data) {
    Object.assign(this, data);
  }
}
