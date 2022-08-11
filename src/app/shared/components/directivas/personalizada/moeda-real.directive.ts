import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[MoedaReal]'
})
export class MoedaRealDirective {

  @Input('MoedaReal') moeda!: string;

  newMoeda: any;

  reg = new RegExp('/^(\d{1,3}(\.\d{3})*|\d+)(\,\d{2})?$/gm')

  constructor() { }

  ngOnInit() {
    this.newMoeda = this.moeda.replace(this.reg , '$1.$2,$3')

    return this.newMoeda
  }

}
