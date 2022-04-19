function soma(n1: number, n2: number): number {
    return n1 + n2
}
console.log(soma(12, 20))

//função anônima//

var subtracao = function (n1: number, n2: number): number {
    return n1 - n2
}
console.log(subtracao(20, 10))

//arrow function//

var multiplicacao = (n1: number, n2: number): number => { return n1 * n2 }
console.log(multiplicacao(20, 10))