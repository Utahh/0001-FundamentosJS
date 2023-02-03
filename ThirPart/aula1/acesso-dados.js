const cliente = {
    nome: "Andre",
    idade: 32,
    cpf:"2231233",
    email:"andre@dominio.com",
};

console.log(`O nome do cliente é ${cliente.nome}, ele tem ${cliente.idade} anos.`);

console.log(`Os 3 primeiros digitos do CPF são ${cliente.cpf.substring(0,3)}`);