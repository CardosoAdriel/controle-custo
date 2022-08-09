import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  formdata: any;
  produto: any;

  constructor() { }

  ngOnInit(): void {
    this.formdata = new FormGroup({
      desc: new FormControl("", Validators.compose([
        Validators.required,
      ])),
      quantity: new FormControl("", Validators.compose([
        Validators.required
      ])),
      price: new FormControl("", Validators.compose([
        Validators.required
      ]))
    })
  }

  enviarDados(data: NgForm) {
    this.produto = data.value
    data.reset()
  }

}
