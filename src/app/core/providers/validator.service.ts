import { AbstractControl } from '@angular/forms';

export class ValidatorService {

  public static matchPasswords(AC: AbstractControl) {
    const password = AC.get('password').value; // to get value in input tag
    const repeatPassword = AC.get('repeatPassword').value; // to get value in input tag
    if (password !== repeatPassword) {
      AC.get('repeatPassword').setErrors({ MatchPasswords: true });
    } else {
      return null;
    }
  }
}
