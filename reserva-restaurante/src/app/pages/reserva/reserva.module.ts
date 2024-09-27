import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservaRoutingModule } from './reserva-routing.module';
import { ReservaComponent } from './reserva.component';
import { CadastroReservaComponent } from './cadastro-reserva/cadastro-reserva.component';
import { ListagemReservaComponent } from './listagem-reserva/listagem-reserva.component';


@NgModule({
  declarations: [
    ReservaComponent,
    CadastroReservaComponent,
    ListagemReservaComponent
  ],
  imports: [
    CommonModule,
    ReservaRoutingModule
  ]
})
export class ReservaModule { }
