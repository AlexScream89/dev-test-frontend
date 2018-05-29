import { Pipe, PipeTransform } from '@angular/core';
import {ConfigService} from '../providers/config.service';

@Pipe({
  name: 'imageLink'
})
export class ImageLinkPipe implements PipeTransform {

  transform(value: string): string {
    return value ? `${ConfigService.basePath}/${value}` : '';
  }

}
