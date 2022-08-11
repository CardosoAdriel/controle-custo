import { FormsComponent } from './shared/components/forms/forms.component';
import { PipesComponent } from './shared/components/pipes/pipes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LifeCycleHooksComponent } from './shared/components/life-cycle-hooks/life-cycle-hooks.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';

const routes: Routes = [
  {path: '', component: CadastroComponent},
  {path: 'pipes', component: PipesComponent},
  {path: 'life-cycles', component: LifeCycleHooksComponent},
  {path: 'forms', component: FormsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
