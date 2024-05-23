// DOM (Document Object Model)
// CRUD (Create, Read, Update, Delete)

const btnClicar = document.querySelector("#btnClicar");
const listaFilmes = document.querySelector("#listaFilmes");
const inputUsuario = document.querySelector("#inputUsuario");

const filmes = [
    {
        nome: "Poderoso Chefão",
        diretor: "Francis Ford Copolla",
        ano: 1972,
        sinopse: "The Godfather (bra: O Poderoso Chefão ; prt: O Padrinho ) é um filme policial estadunidense de 1972 dirigido por Francis Ford Coppola e baseado no livro homônimo de Mario Puzo, tendo seu roteiro escrito por ambos."
    }, 
    {
        nome: "Meninas Malvadas",
        diretor: "Lindsey Lohan",
        ano: "2004",
        sinopse: "Meninas Malvadas Criada na selva africana por seus pais zoólogos, Cady acha que sabe tudo sobre 'sobrevivência dos mais bem dotados'. Mas a lei da selva toma um significado totalmente novo, quando a garota de 15 anos, educada em casa, entra na escola pública pela primeira vez."
    }, 
    {
        nome: "Os Trapalhôes no Rabo do Cometa",
        diretor: "Didi Mocó",
        ano: "1962",
        sinopse: "Uma viagem no tempo contada em forma de desenho animado com caracterizações d'Os Trapalhões, desde a época do Império Romano até os dias atuais, passando pela Idade Média, Velho Oeste e a Primeira Guerra Mundial"
    }
]

// Qual evento quero escutar e uma função
btnClicar.addEventListener("click", function (infosDoEvento){
    infosDoEvento.preventDefault();
    // console.log(infosDoEvento.target.parentNode);

    let novoFilme = document.createElement("li");
    novoFilme.innerText = inputUsuario.value;

    let btnEditar = document.createElement("button");
    btnEditar.innerText = "Editar";
    btnEditar.addEventListener("click", function(){
        novoFilme.style.color = "#F66B92";
        novoFilme.classList.toggle("fundo-preto");
    });

    /* novoFilme.innerHTML = `
    <h1> Título do Filme </h1>
    <p> Sinopse do Filme </p>
    <p> Créditos </p>
    <a href="#"> Saber Mais </a>
    ` */

    let imagemFilme = document.createElement("img");
    imagemFilme.src= "";
    imagemFilme.alt = "";

    // https://www.w3schools.com/jsref/met_node_insertadjacenthtml.asp

    novoFilme.append(btnEditar);

    listaFilmes.append(novoFilme);

    inputUsuario.value = "";

});

// CREATE
function criarFilme(){

    let novoFilme = {
        nome: inputUsuario.value
        /* diretor: inputDiretor.value,
        ano: inputAno.value,
        sinopse: inputSinopse.value */
    };

    filmes.unshift(novoFilme);
    renderizarNaTela();
    inputUsuario.value = "";

};

window.onload = renderizarNaTela();

// READ
function renderizarNaTela(){
    infosDoEvento.preventDefault();

    // Limpa para depois adicionar, para não repetir os elementos
    listaFilmes.innerHTML = "";

    filmes.forEach(
        filme => {
            let novoFilme = document.createElement("li");
            novoFilme.innerText = filme.nome;

            filmes.indexOf(filme);

            listaFilmes.append(novoFilme);
        }
    );

};

// UPDATE
function atualizarFilme(idFilme){

};

// DELETE
function removerFilme(idFilme){
    filmes.splice(idFilme, 1);
};