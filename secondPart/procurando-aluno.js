const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10,8,7.5,9];

const listaDeAlunosEMedias = [alunos, medias];

function exibeNomeENota(aluno) {
    if (listaDeAlunosEMedias[0].includes(aluno)){ // includes verifica em uma variavel se o valor existe 

        //const alunos = listaDeAlunosEMedias[0];
        //const medias = listaDeAlunosEMedias[1];

        const [alunos, medias] = listaDeAlunosEMedias;

        const indice = alunos.indexOf(aluno); // indexOf verifica o indice em que a variavel se encontra

        const mediaDoAluno = medias[indice];

        console.log(`${aluno} tem a media ${mediaDoAluno}. `);

    }else{
        console.log("Aluno não encontrado!");
    }
}

exibeNomeENota("Ana");