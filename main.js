
class Aluno {
    constructor(nomeAluno, notaAluno){
        this.nome = nomeAluno;
        this.nota = notaAluno;
    }
}

const listaAlunos = [
    new Aluno('Juliana', 8), 
    new Aluno('Lisa', 6), 
    new Aluno('Nancy', 3),
    new Aluno('Yzadora', 9),
    new Aluno('Lisa', 4),
    new Aluno('Bruno', 3),
    new Aluno('Luana', 5),
    new Aluno('Janaina', 7),
]

const filtro = listaAlunos.filter(function(item){
    return item.nota >= 6
})


console.log('Lista dos alunos com maior nota são:', filtro)
