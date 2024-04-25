function calcularTabuada() {
    var resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpa resultados anteriores
    var numero = parseInt(prompt("Digite um número: "));

    var texto = `<h2>Tabuada do ${numero}</h2>`;
    for (var i = 1; i <= 10; i++) { // Removido ponto e vírgula
        texto += `${numero} x ${i} = ${numero * i}<br>`;
    }

    resultado.innerHTML = texto;
}