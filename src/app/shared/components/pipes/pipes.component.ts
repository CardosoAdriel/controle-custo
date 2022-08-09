import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  title = "Exemplos de pipes"

  dataHoje = new Date()
  umJson = {name: 'Adriel', idade: '28', endereco: { rua: 'blabla', numero: 55, bairo: 'sei la'}}
  mesAno = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez']
  constructor() { }

  ngOnInit(): void {

  }

}
