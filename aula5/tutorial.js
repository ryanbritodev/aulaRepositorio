console.log("Primeira frase")

function printarNaTela(){
    console.log("Segunda frase")
}

// Não é exibida na tela enquanto não for chamada

console.log("Terceira frase")

// Hoisting

function somar(num1, num2){
    return num1 + num2
}

function mostrarNaTela(num1 = 0, num2 = 0){
    var resultado = somar(num1, num2)
    console.log(resultado)
}

// IMPORTANTE!!!
// Pedir um parêmetro

console.log(somar(5, 8))
console.log(somar(3, 5))
console.log(somar(2, 1))

// Array (é usado const para começá-lo)

const pessoas = ["Caio", "João", "Ciclano", 15, true, {}]
console.log(pessoas[2])

// {} = Objeto (pode vir de APIs)

// .map
// .filter
// .every
// .some
// .fill
// .findIndex
//.findIndex
// .reduce