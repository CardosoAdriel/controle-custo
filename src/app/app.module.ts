import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { CurrencyPipe, registerLocaleData } from '@angular/common';

import ptBr from '@angular/common/locales/pt';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { LifeCycleHooksComponent } from './shared/components/life-cycle-hooks/life-cycle-hooks.component';
import { RaizQuadradaPipe } from './shared/components/pipes/pipe-personalizado/raiz-quadrada.pipe';
import { PipesComponent } from './shared/components/pipes/pipes.component';
import { FormsComponent } from './shared/components/forms/forms.component';
import { TemplateDrivenComponent } from './shared/components/forms/template-driven/template-driven.component';
import { DirectivasComponent } from './shared/components/directivas/directivas.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { MoedaRealDirective } from './shared/components/directivas/personalizada/moeda-real.directive';
import { RealMoedaPipe } from './shared/components/pipes/pipe-personalizado/realMoeda.pipe';
import { OrcamentoComponent } from './pages/cadastro/orcamento/orcamento.component';

registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
    LifeCycleHooksComponent,
    PipesComponent,
    RaizQuadradaPipe,
    HeaderComponent,
    FormsComponent,
    TemplateDrivenComponent,
    DirectivasComponent,
    CadastroComponent,
    MoedaRealDirective,
    RealMoedaPipe,
    OrcamentoComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CurrencyPipe, {provide: LOCALE_ID, useValue: 'pt'}, {provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
