function somar() {
    // Entrada
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);
    var resultadoElement = document.getElementById("resultado");

    // Processamento
    var soma = numero1 + numero2;

    // Saída
    resultado.innerText = `O resultado da soma é ${soma}`;
}

function subtracao() {
    // Entrada
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);
    var resultadoElement = document.getElementById("resultado");

    // Processamento
    var subtracao = numero1 - numero2;

    // Saída
    resultado.innerText = `O resultado da subtração é ${subtracao}`;
}

function divisao() {
    // Entrada
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);
    var resultadoElement = document.getElementById("resultado");

    if (numero2 == 0) {
        resultado.innerText = ("Erro (divisão por zero)");
    }

    // Processamento
    else {
    var divisao = numero1 / numero2;

    // Saída
    resultado.innerText = `O resultado da divisão é ${divisao}`;
    }

}

function multiplicacao() {
    // Entrada
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);
    var resultadoElement = document.getElementById("resultado");

    // Processamento
    var multiplicacao = numero1 * numero2;

    // Saída
    resultado.innerText = `O resultado da multiplicação é ${multiplicacao}`;
}