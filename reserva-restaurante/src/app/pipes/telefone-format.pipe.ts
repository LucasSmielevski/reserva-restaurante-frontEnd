import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telefoneFormat'
})
export class TelefoneFormatPipe implements PipeTransform {

  transform(value: string): string {

    // Remove caracteres não numéricos
    const somenteNumeros = value.replace(/\D/g, '');

    if (somenteNumeros.length === 11) {
      return `(${somenteNumeros.substring(0, 2)}) ${somenteNumeros.substring(2, 7)}-${somenteNumeros.substring(7)}`;
    }

    return value;
  }

}
