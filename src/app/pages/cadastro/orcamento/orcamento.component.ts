import { OrcamentoService } from './../../services/orcamento.service';
import { FormBuilder, NgForm, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-orcamento',
  templateUrl: './orcamento.component.html',
  styleUrls: ['./orcamento.component.css']
})
export class OrcamentoComponent implements OnInit {

  formOrcamento: FormGroup;
  saldo!: number;

  constructor(
    private fb: FormBuilder,
    private currencyPipe: CurrencyPipe,
    private orcamentoService: OrcamentoService
  ) {
    this.formOrcamento = this.fb.group({
      valor: ['', Validators.compose([Validators.required, Validators.min(500), Validators.max(5000)])]
    })

    //Usar o pipe para mostrar moeda
    this.formOrcamento.valueChanges.subscribe( form => {
      if (form.valor) {
        this.formOrcamento.setValue({
          valor: this.currencyPipe.transform(
           this.getNumbersOfValue(form.valor), 'BRL', 'symbol', '1.0-0'
          )
        }, {emitEvent: false})

        this.minOumax(form.valor)
      }
    })
  }

  ngOnInit(): void {

  }

  getNumbersOfValue(valor: string) {
    return valor.replace(/\D/g, '').replace(/^0+/, '')
  }

  minOumax(form: string) {
    let valorNum = +this.getNumbersOfValue(form)
    const conditionValue =  valorNum > 50000 || valorNum < 500
    conditionValue ? this.formOrcamento.setErrors(Validators.min) : null
  }

  setOrcamento(data: any) {
    const newData = +this.getNumbersOfValue(data.valor)

    this.orcamentoService.setValor(newData)
  }

}
