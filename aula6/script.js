// Como criar array em js
const pessoas = ["Fulano", "Ciclano", "Beltrano"]

// Adiciona um elemento no final do array, método push entre parenteses
pessoas.push("Caio")

// Remove o último elemento do array
pessoas.pop()

// Adiciona um elemento no início do array
pessoas.unshift("Caio")

// Remove o primeiro do array
pessoas.shift()

// Atualizar o valor do array
pessoas[1] = "Caio"

// console.log(pessoas[2])
console.log(pessoas)

for(i = 0; i <= 10; i++){
    console.log(pessoas
    )
}

pessoas.forEach (
    // parametrô pode ser o que quiser
    function rodarArray(pessoa) {
        console.log(pessoa + " vai curinthia!")
    }
)

pessoas.forEach (
    // deixa tudo minúsculo
    function rodarArray(pessoa) {
        console.log(pessoa.toLowerCase())
    }
)

// Arrow Function
// Não tem nome e não tem o comando function
// Se for em uma linha só, não precisa de chaves, e se tiver somente um parâmetro, não precisa de parênteses
pessoas.forEach(
    (pessoa) => {
    console.log(pessoa.toLowerCase())
})

// mesma coisa que o forEach, passa por tudo e altera, não mexendo no array original (faz uma cópia)
const pessoasModificado = pessoas.map(pessoa => console.log(pessoa.toLowerCase()))

function modificarPessoas(array){
    return array.map(pessoa => pessoa.toLowerCase())
}

console.log(modificarPessoas(pessoas))


// Objetos
// json = formato padrão de receber dados de api
// js object notation
const filmes = [{
    nome: "Pulp Fiction",
    diretor: "Tarantino",
    ano: 1994
}, {
    nome: "Carros",
    diretor: "Cluetis",
    ano: 2006
}, {
    nome: "Toy Story",
    diretor: "Miguel Falabela",
    ano: 1995
}]

filmes.map(filme => console.log(filme.nome))


// Filtra de forma mais especifica
const filmesModificados =
filmes.filter(filme => filme.ano > 2000)

console.log(filmesModificados)

// botao.addEventListener("click")