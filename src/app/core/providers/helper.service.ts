import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }

  public transformDate(data): Object {
    const date = new Date(data);
    return {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate()
    };
  }

  public prepareDate(data): Date|string {
    const newDate = moment(      {
      year: data.year,
      month: data.month - 1,
      date: data.day
    });
    return newDate.isValid() ? newDate.format('YYYY-MM-DD') : '';
  }
}
