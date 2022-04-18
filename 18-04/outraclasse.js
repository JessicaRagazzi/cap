class Agenda {
    constructor(data, hora, descricao, contato) {
        this.data = data
        this.hora = hora
        this.descricao = descricao
        this.contato = contato
    }

    display() {
        //isso é um método

        console.log(`
        Data: ${this.data}
        Hora: ${this.hora}
        Descricao: ${this.descricao}
        Contato: ${this.contato}
        `)

    }
}

//instanciar o objeto
let registro = new Agenda('10/02/2022', '14:00', 'Fazer crochê', 'Maria')
registro.display()
//console.log(registro)