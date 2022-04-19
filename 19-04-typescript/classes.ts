class Pessoa {
    id: number;
    nome: string;
    fone: string;
    email: string;

    constructor(id: number, nome: string, fone: string, email: string) {
        this.id = id;
        this.nome = nome;
        this.fone = fone;
        this.email = email;
    }
    display(): void {
        console.log(`Id: ${this.id} Nome: ${this.nome} Telefone: ${this.fone} E-mail: ${this.email}`)
    }
}

let pe = new Pessoa(10, 'Maria', '123', 'maria@gmail.com')
pe.display()