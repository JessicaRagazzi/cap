class Itens {        //estes são atributos
    descricao: string;
    preco: number;
    quantidade: number;

    constructor(descricao: string, preco: number, quantidade: number) {
        this.descricao = descricao;      //recebe o que está vindo do parâmetro 
        this.preco = preco;
        this.quantidade = quantidade;
    }

    totalItem(): number {     //este é um método
        return this.quantidade * this.preco;
    }

    valorDesconto(taxa: number): number {     //este é outro método
        return this.totalItem() * (taxa / 100);
    }

    display(taxa: number): void {
        console.log(`
            Descrição....: ${this.descricao}
            Preço........: ${this.preco}
            Qtde.........: ${this.quantidade}
            Subtotal.....: ${this.totalItem()}
            R$ desconto..: ${this.valorDesconto(taxa)}
            R$ pago......: ${this.totalItem() - this.valorDesconto(taxa)}
            `)
    }
}

let item1: Itens = new Itens('Computador', 2000, 2);  // aqui adiciona o objeto
item1.display(10)