import { Component, OnChanges, NgModule, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  price: number = 5
  title = 'controle-custo';

}
