const notas = [10,9.5,8,7,6];

const notasAtualizadas = notas.map((nota) => { // Ele consegue ser últil para reescrever um array 
    return nota + 1 >= 10 ? 10 : nota + 1;
});

console.log(notasAtualizadas);