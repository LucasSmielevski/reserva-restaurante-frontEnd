import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrl: './cadastro-cliente.component.scss'
})
export class CadastroClienteComponent implements OnInit{
  clienteForm!: FormGroup;

  sexoOptions = [
    { value: 0, label: 'Masculino' },
    { value: 1, label: 'Feminino' }
  ];

  constructor(
    private formbuilder: FormBuilder,
    private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.builForm();
  }

  builForm(){
    this.clienteForm = this.formbuilder.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      cpf: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      dataNascimento: ['', Validators.required],
      sexo: ['', Validators.required],
      telefone: ['', Validators.required],
      idRestaurante: [null, Validators.required],
      dataCadastro: [""],
      quantidadeReservas: [0],
      quantidadeValorGasto: [0],
      bloqueado: [false]
    });
  }

  onSubmit(): void {
    if (this.clienteForm.valid) {
      const usuarioCadastro =  this.clienteForm.getRawValue() ;
      this.clienteForm.reset()
      this.clienteService.cadastrarCliente(usuarioCadastro).subscribe(response => {
        console.log('Cliente cadastrado com sucesso!', response);
      }, error => {
        console.error('Erro ao cadastrar cliente', error);
      });
    }
  }
}
