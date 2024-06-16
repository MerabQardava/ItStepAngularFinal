import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cartNumberPipe',
  standalone: true
})
export class CartNumberPipePipe implements PipeTransform {

  transform(value: any): number {
    if (value === undefined || value === null || value.total === undefined || value.total.quantity === undefined) {
      return 0;
    }
    return value.total.quantity;
  }

}
