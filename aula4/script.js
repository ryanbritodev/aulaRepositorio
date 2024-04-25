function logar() {
    var nomeUsuario = document.getElementById("login").value;
    var senhaUsuario = document.getElementById("senha").value;

    if (nomeUsuario === "Ryan" && senhaUsuario === "123") {
        alert("Logado com sucesso!");
        // Adicione uma ação para login bem-sucedido, como redirecionamento
    } else {
        alert("Login ou senha inválido, tente novamente!");
    }
}

document.getElementById("loginButton").addEventListener("click", logar);

for (i = 10; i >= 0; i--){
    console.log(i)
}

/*
let nomeUsuario;

while (true) {
    nomeUsuario = prompt("Digite o seu nome:");

    // Verificando se o nome é uma string não vazia (.trim remove todos os espaços subjacentes)
    if (nomeUsuario && nomeUsuario.trim().length > 0) {
        break;
    
    } else {

        alert("Nome inválido. Por favor, digite um nome válido.");

    }
}

document.write("Nome válido: " + nomeUsuario);
*/