/*Na função construtora crie o método calcularMedia que retorna a média de suas notas. 
Também terá um método chamado faltas, que simplesmente aumenta o número de faltas em 1. 
Crie alguns alunos para testar a sua função construtora. */

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

console.log(Aluno4.calcularMedia())
console.log(Aluno4.faltas())