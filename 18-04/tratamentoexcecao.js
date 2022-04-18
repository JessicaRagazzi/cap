function teste(n1, n2) {
    try {
        if (n2 == 0) {
            throw "Não é possível dividir por zero"
        } else {
            let x = n1 / n2
        }

        if (n1 == undefined) {
            throw "Informe número"
        }

    } catch (err) {
        console.log(`Erro: ${err}`)
    }
}

//*teste(10, 0)

function pegaDadosArray() {
    let a = [1, 2, 3, 4, 5, 6] //0 1 2 3 4 5 (6 não é uma posição válida)
    try {
        let i = 6
        if (i >= a.length) {
            throw "Indice de array inválido"
        }
        let x = a[i]
        console.log(x)
    } catch (err) {
        console.log(err)
    }
}

pegaDadosArray()