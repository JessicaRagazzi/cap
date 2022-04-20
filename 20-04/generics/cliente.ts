class Cliente {
    id: number;
    nome: string;
    contato: string;
    constructor(id: number, nome: string, contato: string) {
        this.id = id;
        this.nome = nome;
        this.contato = contato
    }
}

export { Cliente }