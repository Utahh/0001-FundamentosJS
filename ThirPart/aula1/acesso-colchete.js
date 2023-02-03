const cliente = {
    nome: "Andre",
    idade: 32,
    cpf:"2231233",
    email:"andre@dominio.com",
};

console.log(`O nome do cliente é ${cliente["nome"]}, ele tem ${cliente["idade"]} anos.`);

const chaves = ["nome", "idade", "cpf", "email","altura"];

chaves.forEach((chave) => {
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`);
});