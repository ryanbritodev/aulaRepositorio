// Função para escolha do computador
function escolhaComp() {
    const jogada = ["Pedra", "Papel", "Tesoura"];
    let numeroAleatorio = Math.floor(Math.random() * jogada.length);
    return jogada[numeroAleatorio];
}

// Função para jogar e determinar o resultado
function jogar(escolhaDoUsuario) {
    let escolhaPC = escolhaComp();
    let resultado = "";

    if (escolhaPC === escolhaDoUsuario) {
        resultado = "O jogo empatou! Ambos jogaram " + escolhaDoUsuario + ".";
    } else {
        if (escolhaPC === "Pedra") {
            if (escolhaDoUsuario === "Papel") {
                resultado = "Boa! Você ganhou. O computador jogou Pedra e você jogou Papel.";
            } else if (escolhaDoUsuario === "Tesoura") {
                resultado = "Que pena! O computador ganhou. O computador jogou Pedra e você jogou Tesoura.";
            }
        }

        if (escolhaPC === "Papel") {
            if (escolhaDoUsuario === "Tesoura") {
                resultado = "Boa! Você ganhou. O computador jogou Papel e você jogou Tesoura.";
            } else if (escolhaDoUsuario === "Pedra") {
                resultado = "Que pena! O computador ganhou. O computador jogou Papel e você jogou Pedra.";
            }
        }

        if (escolhaPC === "Tesoura") {
            if (escolhaDoUsuario === "Pedra") {
                resultado = "Boa! Você ganhou. O computador jogou Tesoura e você jogou Pedra.";
            } else if (escolhaDoUsuario === "Papel") {
                resultado = "Que pena! O computador ganhou. O computador jogou Tesoura e você jogou Papel.";
            }
        }
    }

    document.getElementById("resultado").innerText = resultado;
}