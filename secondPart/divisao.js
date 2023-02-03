const alunos = [
"Miguel",
"Arthur",
"Gael",
"Théo",
"Heitor",
"Ravi",
"Davi",
"Bernardo",
"Noah",
"Gabriel",
"Helena",
"Laura",
"Maria",
"Alice",
"Sophia",
"Manuela",
"Maitê",
"Liz",
"Cecília",
"Isabella"
];

const sala1 = alunos.slice(0,alunos.length/2); // splice divide os valoes 
const sala2 = alunos.slice(alunos.length/2);

console.log(sala1);
console.log(sala2);