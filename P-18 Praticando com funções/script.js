// Exercicio De exemplo:
// function calcImc(altura, peso){
//     let imc = peso / (altura * altura)
//     alert(imc.toFixed(2))
// }

// let peso = parseFloat(prompt("Digite o peso"))
// let altura  = parseFloat(prompt("Digite a altura"))

// calcImc(altura, peso)

// Exemplo 2
function calcImc(){
    let peso = parseFloat(prompt("Digite o peso"))
    let altura  = parseFloat(prompt("Digite a altura"))
    
    let imc = peso / (altura * altura)
    alert(imc.toFixed(2))
}
// calcImc()// -> Chamada da função. 

// Exercicio 1
function lerNumero(num){
    num = parseInt(prompt("Digite um número"));
    alert(num);
}
// lerNumero();

// Exercicio 2
function soma(num1,num2,num3){
    num1 = parseInt(prompt("Digite o primeiro número: "));
    num2 = parseInt(prompt("Digie o segundo número: "));
    num3 = parseInt(prompt("Digite o teceiro número: "));

    soma = num1+num2+num3;
    alert(`A soma dos números é ${soma}`);
}
// soma();

// Exercicio 3
function notas(nota1,nota2){
    nota1 = parseInt(prompt("Digite a nota do primeiro semestre: "));
    nota2 = parseInt(prompt("Digite a nota do segundo semestre: "));
    let somaNota = (nota1+nota2)/12;

    alert(`A nota total do ano foi de ${somaNota.toFixed(2)}`);
}

// notas();

// Exercicio 4
function divisaoExata(numb1,numb2){
    numb1 = parseInt(prompt("Digite o primeiro número: "));
    numb2 = parseInt(prompt("Digite o segundo número: "));

    let resto = numb1 % numb2;

    if(resto == 0){
        alert("Divisão exata");
    }else{
        alert(`Está é uma divisão inexata o resto dela é ${resto}`);
    }
}
// divisaoExata();

// Exercicio 5
function quadrado(number){
    number = parseInt(prompt("Digite um número"));

    let quadrificar = number*number;

    alert(`O quadrado do Número é ${quadrificar}`);
}
// quadrado();

// Exercicio 6
function mediaPonderada(nota1,nota2,nota3,nota4){
    nota1 = parseInt(prompt("Digite a primeira nota: "));
    nota2 = parseInt(prompt("Digite a segunda nota: "));
    nota3 = parseInt(prompt("Digite a terceira nota: "));
    nota4 = parseInt(prompt("Digite a quarta nota: "));

    let calculo = (nota1*1+nota2*2+nota3*3+nota4*4)/10;

    alert(`A média ponderada é ${calculo.toFixed(0)}`);
}
// mediaPonderada();

// Exercicio 7
function notasProvas(notaM,notaP,notaCg,notaInf){
    notaM = parseInt(prompt("Digite a nota de Matemática: "));
    notaP = parseInt(prompt("Digite a nota de Português: "));
    notaCg = parseInt(prompt("Digite a nota de Conhecimentos Gerais: "));
    notaInf = parseInt(prompt("Digite a nota de Informática: "));

    let mediaCalc = (notaM*2+notaP*1+notaCg*1+notaInf*1)/5;

    alert(`A média das notas é ${mediaCalc}`);
}
// notasProvas();

// Exercicio 8
function saldo(saldoConta){
    saldoConta = parseInt(prompt("Digite o saldo da sua conta: "));

    let reajuste = saldoConta*1.03;

    alert(`o novo saldo da conta é ${reajuste.toFixed(2)}`);
}
// saldo();

// Exercicio 9
function areaTriangulo(area,base,altura){
    base = parseInt(prompt("Digite a base do triangulo: "));
    altura = parseInt(prompt("Digite a altura do triangulo: "));
    area = (base*altura)/2;

    alert(`A área do triangulo é ${area}`);
}
// areaTriangulo();

