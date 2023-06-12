import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fechaDate'
})
export class FechaDatePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {

    return `${value.getDate()}/${value.getMonth() +1}/${value.getFullYear()} ${value.getHours()}:${value.getMinutes()}`;
  }

}
