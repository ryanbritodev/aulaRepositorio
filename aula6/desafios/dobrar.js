const numeros = [1, 2, 3, 4, 5]

numeros.forEach (
    // parametrô pode ser o que quiser
    function rodarArray(numero) {
        console.log(numero * 2)
    }
)

// alt + shift + a = comenta varias linhas 
/* const doubleNums = (arryasNums) => {
    return arryasNums.map(num => num * 2)
} */