import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpfFormat'
})
export class CpfFormatPipe implements PipeTransform {

  transform(cpf: string,): string {
     const formattedCpf = cpf.replace(/(\d{3})(\d)/, '$1.$2')
     .replace(/(\d{3})(\d)/, '$1.$2')
     .replace(/(\d{3})(\d{2})$/, '$1-$2');

return formattedCpf;
  }

}
