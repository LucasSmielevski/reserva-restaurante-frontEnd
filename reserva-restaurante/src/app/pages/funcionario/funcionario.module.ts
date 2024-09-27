import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuncionarioRoutingModule } from './funcionario-routing.module';
import { FuncionarioComponent } from './funcionario.component';
import { CadastroFuncionarioComponent } from './cadastro-funcionario/cadastro-funcionario.component';
import { ListagemFuncionarioComponent } from './listagem-funcionario/listagem-funcionario.component';


@NgModule({
  declarations: [
    FuncionarioComponent,
    CadastroFuncionarioComponent,
    ListagemFuncionarioComponent
  ],
  imports: [
    CommonModule,
    FuncionarioRoutingModule
  ]
})
export class FuncionarioModule { }
