/*1 - Crie uma função construtora que tenha como atributos: nome (string), 
quantidade de faltas (number) e notas (array de números).*/


function Aluno(nome, qdtFalta, notas){
    this.nome = nome;
    this.qdtFalta = qdtFalta;
    this.notas = notas;
  }

let Aluno1 = new Aluno('Matheus', 5, [8,8,9,10]);
let Aluno2 = new Aluno('Maria', 1, [6,7,6, 9]);
let Aluno3 = new Aluno('João', 2, [9,9,10,10]);
let Aluno4 = new Aluno('Tiago', 4, [7,9,6,10]);
let Aluno5 = new Aluno('Matias', 3, [8,4,5,10]);
let Aluno6 = new Aluno('Joana', 8, [8,3,9,10]);

  let listaAlunos = [Aluno1,Aluno2,Aluno3,Aluno4,Aluno5,Aluno6]
  
  let turmaA = {
    alunos: listaAlunos,
    cadastrarAluno(nome, qdtFalta , notas) {
      let aluno = new Aluno( nome,  qdtFalta ,   notas)
      this.alunos.push(aluno)
    }
  }
  
  turmaA.cadastrarAluno('Geremias', 8, [5,6,7,9])
  console.log(listaAlunos)



