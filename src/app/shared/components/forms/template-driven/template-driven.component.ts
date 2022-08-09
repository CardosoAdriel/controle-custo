import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  name: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onClickSubmit(data: NgForm) {
    this.name = data.form.value.name
    data.resetForm()
  }

}
