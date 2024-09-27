import { Component } from '@angular/core';
import { ClienteService } from '../../../services/cliente.service';

@Component({
  selector: 'app-listagem-cliente',
  templateUrl: './listagem-cliente.component.html',
  styleUrl: './listagem-cliente.component.scss'
})
export class ListagemClienteComponent {
  clientes: any[] = [];
  page: number = 0;
  size: number = 5;
  totalElements: number = 0;

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.loadClientes(this.page, this.size);
  }

  loadClientes(page: number, size: number): void {
    this.clienteService.getClientesPaginados(page, size).subscribe(response => {
      this.clientes = response.content;
      this.totalElements = response.totalElements;
    });
  }

  onPageChange(event: any): void {
    this.page = event.pageIndex;
    this.size = event.pageSize;
    this.loadClientes(this.page, this.size);
  }
}
