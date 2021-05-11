import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(value: string, targetUnits: string): unknown {
    if (!value){
      return '';
    }
    var input = parseFloat(value);

    switch(targetUnits){
      case 'km':
        return input * 1.60934;
      case 'm':
        return input * 1.60934 * 1000;
      case 'cm':
        return input * 1.60934 * 1000 * 1000;
      default:
        throw new Error("Target Unit not supported")
    }
  }
}
