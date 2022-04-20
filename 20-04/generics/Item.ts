import { IdaoGenerica } from "./interfaceGenerica";
import { Produto } from "./Produto";

export default class Item implements IdaoGenerica<Item>{
    produto: Produto;
    preco: number;
    quantidade: number;

    constructor(produto: Produto, preco: number, quantidade: number) {
        this.produto = produto;
        this.preco = preco;
        this.quantidade = quantidade;
    }
    salvar(): boolean {
        throw new Error("Method not implemented.");
    }
    excluir(id: number): boolean {
        throw new Error("Method not implemented.");
    }
    consultarTodos(): Item[] {
        throw new Error("Method not implemented.");
    }
    consultarPeloId(id: number): Item {
        throw new Error("Method not implemented.");
    }
    alterar(objeto: Item): boolean {
        throw new Error("Method not implemented.");
    }
}

export { Item }