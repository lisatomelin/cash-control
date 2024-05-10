export interface Transacoes {
  conta: Conta;
  transacao: Transacao[];
}

export interface Conta {
  entrada: number;
  saida: number;
  total: number;
}

export interface Transacao {
  id: number;
  descricao: string;
  preco: number;
  dataTransacao: Date;
  tipoTransacao: string;
  categoria: string;
}
