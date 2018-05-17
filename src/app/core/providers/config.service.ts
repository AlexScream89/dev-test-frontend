import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  public static basePath: string = environment.basePath;
  public static googleClientId: any = '746036837762-il7a2vs517taktjs0lb5tb4taj5jdseo.apps.googleusercontent.com';
  public static facebookAppId: any = '230048087759993';
}
