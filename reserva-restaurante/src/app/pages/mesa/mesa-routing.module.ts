import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MesaComponent } from './mesa.component';
import { CadastroMesaComponent } from './cadastro-mesa/cadastro-mesa.component';
import { ListagemMesaComponent } from './listagem-mesa/listagem-mesa.component';

const routes: Routes = [
  {path : '', component : ListagemMesaComponent},
  { path: 'cadastro', component: CadastroMesaComponent },
  { path: 'listagem', component: ListagemMesaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MesaRoutingModule { }
