const nomes = ["Evaldo","Mari","Camis"];

nomes.forEach(function (nome) {
    console.log(nome);
});

nomes.forEach((nome) => { // Utilizando a arrow function como declaração da variável callback 
    console.log(nome);
});

function imprimeNome() {
    console.log(nome);
};

nomes.forEach(imprimeNome); // forma mais curta de declaração de variáveis em funções callbacks 

