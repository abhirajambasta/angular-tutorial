import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'decap' })
export class OneParamPipe implements PipeTransform {
    transform(value: string): any {
        if (!value) return value;
        function pascal(txt) {     
            let variable = txt.replace('.',' ');
            console.log(variable);
            let x = variable.indexOf(' ');
            variable = variable.charAt(0).toUpperCase() + variable.substr(1).toLowerCase();
            variable.charAt(x+1).toUpperCase();
            return variable.split(' ').join('');
        }
        return value.replace(/\w\S*/g, pascal);
    }
}