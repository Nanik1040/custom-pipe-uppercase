import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'upper',
})
export class CustomPipe implements PipeTransform {
  transform(text) {
    return text.toUpperCase();
  }
}
