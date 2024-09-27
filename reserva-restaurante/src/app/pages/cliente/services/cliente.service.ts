import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private apiUrl = '/clientes';

  private clientes: Array<Cliente> = [];


  constructor(private http : HttpClient) { }

  cadastrarCliente(clienteData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, clienteData);
  }

  getClientesPaginados(page: number, size: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?page=${page}&size=${size}`);
  }

  excluirUsuario(id : number){
    return this.clientes = this.clientes.filter(cliente => cliente.id != id)
  }
}
