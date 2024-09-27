import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservaComponent } from './reserva.component';
import { ListagemReservaComponent } from './listagem-reserva/listagem-reserva.component';
import { CadastroReservaComponent } from './cadastro-reserva/cadastro-reserva.component';

const routes: Routes = [
  { path: 'cadastro', component: CadastroReservaComponent },
  { path: 'listagem', component: ListagemReservaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservaRoutingModule { }
