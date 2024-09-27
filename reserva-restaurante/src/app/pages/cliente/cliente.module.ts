import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

import { ClienteRoutingModule } from './cliente-routing.module';
import { ClienteComponent } from './cliente.component';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { ListagemClienteComponent } from './listagem-cliente/listagem-cliente.component';


@NgModule({
  declarations: [
    ClienteComponent,
    CadastroClienteComponent,
    ListagemClienteComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class ClienteModule { }
