import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  setOrcamento(data: any) {
    console.log('Submeteu ! ', data)
  }

}
