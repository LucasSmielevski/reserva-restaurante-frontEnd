import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestauranteRoutingModule } from './restaurante-routing.module';
import { RestauranteComponent } from './restaurante.component';
import { CadastroRestauranteComponent } from './cadastro-restaurante/cadastro-restaurante.component';
import { ListagemRestauranteComponent } from './listagem-restaurante/listagem-restaurante.component';


@NgModule({
  declarations: [
    RestauranteComponent,
    CadastroRestauranteComponent,
    ListagemRestauranteComponent
  ],
  imports: [
    CommonModule,
    RestauranteRoutingModule
  ]
})
export class RestauranteModule { }
