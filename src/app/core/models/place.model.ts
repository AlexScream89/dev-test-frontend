export class Place {
  public imageUrl: string;
  public country: string;
  public city: string;
  public month: string;
  public beginAt: Date;
  public endAt: Date;

  constructor(data) {
    Object.assign(this, data);
  }
}
