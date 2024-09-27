export interface Cliente{
  id: number,
  nome: string,
  sobrenome: string,
  cpf: string
  dataNascimento: Date,
  sexo: string,
  telefone: string
  dataCadastro: Date
  quantidadeReservas: number
  quantidadeValorGasto: number,
  bloqueado: boolean
  idRestaurante: number
}
