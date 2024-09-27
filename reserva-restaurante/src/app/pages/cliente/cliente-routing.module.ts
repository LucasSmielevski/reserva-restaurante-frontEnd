import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './cliente.component';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { ListagemClienteComponent } from './listagem-cliente/listagem-cliente.component';

const routes: Routes = [
  { path: 'cadastro', component: CadastroClienteComponent },
  { path: 'listagem', component: ListagemClienteComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
