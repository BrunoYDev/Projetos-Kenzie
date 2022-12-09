let nomeDoAluno = prompt("Digite o nome do aluno: ");
if(nomeDoAluno.length < 5){
  alert("Nome inválido");
}else{
let materia1 = prompt("Digite a primeira materia: ");
let nota1 = parseFloat(prompt("Digite a nota da materia 1: "));
let materia2 = prompt("Digite a segunda materia: ");
let nota2 = parseFloat(prompt("Digite a nota da materia 2: "));
let materia3 = prompt("Digite a terceira materia: ");
let nota3 = parseFloat(prompt("Digite a nota da materia 3: "));
let materia4 = prompt("Digite a quarta materia: ");
let nota4 = parseFloat(prompt("Digite a nota da materia 4: "));
let materia5 = prompt("Digite a quinta materia: ");
let nota5 = parseFloat(prompt("Digite a nota da materia 5: "));
let somaNota = nota1+nota2+nota3+nota4+nota5;
let mediaNota = somaNota/5;
let presenca = parseFloat(prompt("Digite a nota de presença do aluno: "));
    if(mediaNota <= 0 || mediaNota > 10){
        alert("Números inseridos nas notas inválidos");
    }else{
    if(mediaNota >= 8 && presenca >= 6){
        alert("Aluno aprovado");
    }else{
        alert("Aluno não aprovado");
    }
}
}
