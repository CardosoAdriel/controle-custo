import { Component, OnInit } from '@angular/core';
import { OrcamentoService } from 'src/app/pages/services/orcamento.service';
import { BaseService } from '../../services/base/base.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  valorOrcamento!: number;

  constructor(private orcamentoService: OrcamentoService) {
    this.orcamentoService.getValor().subscribe(value => this.valorOrcamento = value)
  }

  ngOnInit() {

  }

}
