import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestauranteComponent } from './restaurante.component';
import { CadastroRestauranteComponent } from './cadastro-restaurante/cadastro-restaurante.component';
import { ListagemRestauranteComponent } from './listagem-restaurante/listagem-restaurante.component';

const routes: Routes = [
  {path: '', component: ListagemRestauranteComponent},
  { path: 'cadastro', component: CadastroRestauranteComponent },
  { path: 'listagem', component: ListagemRestauranteComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestauranteRoutingModule { }
