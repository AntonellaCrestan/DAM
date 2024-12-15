import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cambiarAmayuscula',
  standalone: true
})
export class CambiarAmayusculaPipe implements PipeTransform {

  transform(value: string): string {
    return value.toUpperCase();
  }

}
