import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PedidoRoutingModule } from './pedido-routing.module';
import { PedidoComponent } from './pedido.component';
import { CadastroPedidoComponent } from './cadastro-pedido/cadastro-pedido.component';
import { ListagemPedidoComponent } from './listagem-pedido/listagem-pedido.component';


@NgModule({
  declarations: [
    PedidoComponent,
    CadastroPedidoComponent,
    ListagemPedidoComponent
  ],
  imports: [
    CommonModule,
    PedidoRoutingModule
  ]
})
export class PedidoModule { }
