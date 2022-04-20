interface IdaoGenerica<T> {
    salvar(): boolean;
    excluir(id: number): boolean;
    consultarTodos(): T[];
    consultarPeloId(id: number): T;
    alterar(objeto: T): boolean;
}

export { IdaoGenerica }