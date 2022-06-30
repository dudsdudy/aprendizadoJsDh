/*Crie um método para o objeto curso que receba um aluno (como parâmetro) e retorne true 
se ele aprovou no curso ou false em caso de reprovação. Para ser aprovado, 
o aluno tem que ter uma média igual ou acima da nota de aprovação  e ter menos faltas que faltas máximas. 
Se tiver a mesma quantidade, tem que estar 10% acima da nota de aprovação.*/

class Aluno {
    constructor(nome, qtFaltas, notas) {
        this.nome = nome
        this.qtFaltas = qtFaltas
        this.notas = notas
        this.calcularMedia = ()=>{
            let soma = 0
            for (let i = 0; i < this.notas.length; i++) {
                soma = soma + this.notas[i]
            }
            const media = soma / this.notas.length
            return media
        }
        this.faltas = ()=> {
            this.qtFaltas ++
            return this.qtFaltas
        }
    }
}

let Aluno1 = new Aluno('Matheus', 5, [8,8,9,10]);
let Aluno2 = new Aluno('Maria', 1, [6,7,6, 9]);
let Aluno3 = new Aluno('João', 2, [9,9,10,10]);
let Aluno4 = new Aluno('Tiago', 4, [7,9,6,10]);
let Aluno5 = new Aluno('Matias', 3, [8,4,5,10]);
let Aluno6 = new Aluno('Joana', 8, [8,3,9,10]);

console.log(Aluno1.calcularMedia())
console.log(Aluno3.faltas())
console.log( 
             `O Aluno : ${Aluno3.nome} passou, com apenas ${Aluno3.faltas()} faltas, 
                e suas respectivas notas são:${Aluno3.notas}. Sua média final é de: ${Aluno3.calcularMedia()}`)

let curso = {
    nomeCurso: 'Programação Imperativa',
    notaAprovacao: 7,
    maximoDeFaltas: 4,
    listaAlunos: [Aluno1, Aluno2, Aluno3, Aluno4, Aluno5],

    cadastrarAluno(Aluno) {
        this.listaAlunos.push(Aluno);
    },
    aprovado(nomeAluno) {
        
        if (nomeAluno > this.listaAlunos.length - 1) {
            return 'Aluno não cadastrado'
        }

        let aluno = this.listaAlunos[nomeAluno];
      
        if (aluno.qtFaltas < this.maximoDeFaltas && aluno.calcularMedia() >= this.notaAprovacao 
        || aluno.calcularMedia() >= this.notaAprovacao * 1.1){
            return 'Foi aprovado(a) '//true
           
        } else {
            return 'Reprovado(a) '//false
        }
    },
    alunosAprovados() {
        let aprovados = [];
        for (let i = 0; i < this.listaAlunos.length; i++) {
            aprovados.push(this.aprovado(i));
        }
        return aprovados;
    },
};


