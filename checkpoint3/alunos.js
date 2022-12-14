function Aluno(nome, qtd_faltas, notas) {
  this.nome = nome;
  this.qtd_faltas = qtd_faltas;
  this.notas = notas;

  this.calcularMedia = function () {
    return (this.notas[0] + this.notas[1]) / 2;
  };

  this.faltas = function () {
    return this.qtd_faltas + 1;
  };
}

function Curso(nomeDoCurso, notaDeAprovacao, faltasMaximas, listaDeEstudantes) {
  this.nomeDoCurso = nomeDoCurso;
  this.notaDeAprovacao = notaDeAprovacao;
  this.faltasMaximas = faltasMaximas;
  this.listaDeEstudantes = listaDeEstudantes;

  this.adicaoDeAlunos = function (aluno) {
    this.listaDeEstudantes.push(aluno);
  };

  this.alunoAprovadoNormal = function (aluno) {
    return (
      aluno.qtd_faltas < this.faltasMaximas &&
      aluno.calcularMedia() >= this.notaDeAprovacao
    );
  };

  this.alunoAprovadoFaltaMax = function (aluno) {
    return (
      aluno.qtd_faltas === this.faltasMaximas &&
      aluno.calcularMedia() >= this.notaDeAprovacao * 1.1
    );
  };

  this.alunoAprovado = function (aluno) {
    return this.alunoAprovadoNormal(aluno) || this.alunoAprovadoFaltaMax(aluno);
  };

  this.aprovacaoGeral = function () {
    let listaAprovados = [];
    for (let indice = 0; indice < this.listaDeEstudantes.length; indice++) {
      listaAprovados.push(this.alunoAprovado(this.listaDeEstudantes[indice]));
    }
    return listaAprovados;
  };
}

const aluno = new Aluno("Thalita", 8, [10, 10]);

const aluno2 = new Aluno("Maria", 2, [8, 2]);

const aluno3 = new Aluno("Bebel", 10, [7, 1]);

const aluno4 = new Aluno("Spock", 1, [10, 8]);

const aluno5 = new Aluno("Filomena", 0, [10, 2]);

console.log(aluno2.calcularMedia());

console.log(aluno2.faltas());

const engenharia = new Curso("Engenharia", 7, 10, [aluno]);

engenharia.adicaoDeAlunos(aluno2);
engenharia.adicaoDeAlunos(aluno3);
engenharia.adicaoDeAlunos(aluno4);
engenharia.adicaoDeAlunos(aluno5);

console.log(engenharia.listaDeEstudantes);

console.log(engenharia.alunoAprovado(aluno5));

console.log(engenharia.aprovacaoGeral());
