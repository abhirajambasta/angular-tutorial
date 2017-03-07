import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'division' })
export class TwooParamPipe implements PipeTransform {   
     transform(arg1: number, arg2: number, arg3: number): number {
    let num = +(arg1) + +(arg2) - +(arg3);
    return num;
  }
}