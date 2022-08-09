import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { LifeCycleHooksComponent } from './shared/components/life-cycle-hooks/life-cycle-hooks.component';
import { RaizQuadradaPipe } from './shared/components/pipes/pipe-personalizado/raiz-quadrada.pipe';
import { PipesComponent } from './shared/components/pipes/pipes.component';
import { FormsComponent } from './shared/components/forms/forms.component';
import { TemplateDrivenComponent } from './shared/components/forms/template-driven/template-driven.component';

@NgModule({
  declarations: [
    AppComponent,
    LifeCycleHooksComponent,
    PipesComponent,
    RaizQuadradaPipe,
    HeaderComponent,
    FormsComponent,
    TemplateDrivenComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
