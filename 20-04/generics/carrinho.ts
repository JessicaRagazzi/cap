import Item from "./Item";

class Carrinho {
    itens: Item[];
    data: string;
    cliente: string;
    finalizado: boolean;

    constructor(data: string, cliente: string) {
        this.itens = [];
        this.data = data;
        this.cliente = cliente;
        this.finalizado = true;
    }
    add(it: Item): void {
        try {
            if (this.finalizado) {
                throw "Carrinho já finalizado"
            }
        }
        catch (err) {
            console.log(err)
        }
        this.itens.push(it);
    }

    remove(it: Item): void {
        let posicao = this.itens.indexOf(it);
        if (posicao > -1) {
            delete this.itens[posicao]
        }
    }

    getTotal(): number {
        let total: number = 0;
        for (let it of this.itens) {
            total += (it.preco * it.quantidade)
        }
        return total;
    }

    finalizar() {
        this.finalizado = true;
    }
}

export { Carrinho }
