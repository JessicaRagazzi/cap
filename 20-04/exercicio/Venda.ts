import { IDao } from "./InterfaceDao";

class Venda implements IDao {
    data: string;
    cliente: string;

    constructor(data: string, cliente: string) {
        this.data = data;
        this.cliente = cliente;
    }

    salvar(): boolean {
        console.log('Venda cadastrada com sucesso')
        return true;
    }

    alterar(objeto: string): boolean {
        console.log('Venda alterada com sucesso')
        return true;
    }

    excluir(id: number): void {
        console.log('Venda excluída com sucesso')
    }

    consultar(): string[] {     //quando consultar o objeto, ele trará vários objetos, um em cada linha 
        let x: string[] = [];
        return x;
    }

    consultarPorId(id: number): string {
        return 'maria';
    }

}

let v1: Venda;
v1 = new Venda('20/04', 'Maria')
v1.salvar()
v1.alterar('Maria')