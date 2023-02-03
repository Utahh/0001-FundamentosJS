const mediaNumeros = [10,6.5,8,7.5];

let somaDasNotas = 0;

for (let indice = 0; indice < mediaNumeros.length; indice++) {
    somaDasNotas += mediaNumeros[indice];
    
}

const media = somaDasNotas / mediaNumeros.length;

console.log(` A media das notas é: ${media}.`);