export class User {
  public id: string;
  public firstName: string;
  public lastName: string;
  public email: string;
  public password: string;

  constructor(data) {
    this.id = data._id;
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.email = data.email;
    this.password = '';
  }
}
