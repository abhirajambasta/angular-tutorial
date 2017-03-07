import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'initials' })
export class TwoParamPipe implements PipeTransform {   
     transform(value: string, seperator: string): string {
    let result = value.split(' ').join(seperator);
    return result;
  }
}