import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedidoComponent } from './pedido.component';
import { CadastroPedidoComponent } from './cadastro-pedido/cadastro-pedido.component';
import { ListagemPedidoComponent } from './listagem-pedido/listagem-pedido.component';

const routes: Routes = [
  {path : '', component: ListagemPedidoComponent},
  { path: 'cadastro', component: CadastroPedidoComponent },
  { path: 'listagem', component: ListagemPedidoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedidoRoutingModule { }
