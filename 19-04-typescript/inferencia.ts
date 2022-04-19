var a = "ola"; //se colocar assim, ele define o tipo automáticamente -  exemplo, string 
//a = 10; //não aceita número pois foi definido antes que se trata de uma string

var b; //declarando dessa maneira, ele entende o tipo como "any" e aceita qualquer tipo 
b = 10; //então não há conflitos entre número e string 
b = "ola"

//Outra maneira de inserir informações:

type Contato = {
    id: number;
    nome: string;
    fone: string;
    email: string;
}

var ct: Contato = { id: 0, nome: "", fone: "", email: "" }; //tem que informar os atributos vazios para ele iniciar 
ct.id = 10;
ct.nome = "Maria";
ct.fone = "1234";
ct.email = "maria@gmail.com"

console.log(ct)