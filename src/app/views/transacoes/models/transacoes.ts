export interface Transacoes {
    id?: number;
    descricao: string;
    valor: number;
    dataTransacao: Date;
    tipoTransacao: boolean;
    categoriaId: number;
    //categoria?: Categoria;

}

