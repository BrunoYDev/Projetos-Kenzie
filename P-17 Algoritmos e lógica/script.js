//Exercicio 1
// let salarioMinimo = parseFloat(prompt("Digite o Salario minimo: ")); //1.212
// let quilowatts = parseFloat(prompt("Digite a quantidade de Quilowatts gasto por casa: ")); // 152.2
// let kw100 = salarioMinimo/7 ; //173,14
// let realPorKw = kw100/100; //1.73
// let calculo = (quilowatts-100)*realPorKw+kw100;
// let aSerPago = calculo*0.9;

// alert(`O valor de cada Quilowatts é R$${realPorKw.toFixed(2)} e o valor antes da promoção a ser pago é R$${calculo.toFixed(2)} após a promoção ficará R$${aSerPago.toFixed(2)}`);

// Exercicio 2
// let nomeProduto = prompt("Insira o nome do produto");
// let produto = parseFloat(prompt("Insira o valor do produto"));

// let calculo = produto*0.91;

// alert(`O produto ${nomeProduto} de valor ${produto.toFixed(2)} ficará a ${calculo.toFixed(2)} após a aplicação do desconto!`);

// Exercicio 3
// let a = prompt("Digite um texto: ");
// let b = prompt("Digite um texto: ");
// let aux = 0;
// aux = a;
// a = b;
// b = aux;

// alert(`O valor A possuia o valor ${b} e o valor B possuia o valor ${a} agora após a inversão ficou A = ${a} e B = ${b}`);

// Exercicio 4
// let quantidadeDeFitas = parseInt(prompt("Insira aqui a quantidade de fitas: "));
// let valorPorFita = parseFloat(prompt("Valor por fita: "));

// let calculo = (quantidadeDeFitas/3)*valorPorFita*12; // valor anual com alugueis
// let multas = valorPorFita*1.1;
// let calculo2 = (quantidadeDeFitas/3)/10*multas; // quantidade de valor ganhos apartir de multas
// let calculo3 = quantidadeDeFitas*0.02; // quantidade de fitas que estragam
// let calculo4 = calculo3/10; // quantidade que é reposto
// let calculo5 = quantidadeDeFitas-calculo3; // quantas fitas restam
// alert(`O valor anual ganho com as fitas é de R$${calculo.toFixed(2)}, o valor ganho só com multas é R$${calculo2.toFixed(2)}, a quantidade de fitas que estragam é ${calculo3.toFixed(0)} Fita(s), as fitas repostas são apenas ${calculo4.toFixed(0)} Fita(s) sendo assim , a locadora terá ${calculo5} Fitas no fim do ano.`);

// Exericicio 5
// let number = parseInt(prompt("Digite um número: "));
// if(Number.isInteger(number) && number < 999){
//     let centena = number.toString().charAt(0)+"00";
//     let dezena = number.toString().charAt(1)+"0";
//     let unidade = number.toString().charAt(2);
//     alert(`A Centena é: ${centena}, a Dezena é: ${dezena} e a Unidade é: ${unidade}`);
    
// }else{
//     alert("Número muito alto, digite um número menor que \"999\" ");
// }

// Exercicio 6
// let number = parseInt(prompt("Digite um número: "));

// if(Number.isInteger(number) && number <= 999 && number > 0){
// let numberRev = number.toString().split('').reverse().join('');
// alert(`O numero original é ${number} ele invertido fica ${numberRev}`);
// }else{
//     alert("Número inserido muito alto ou muito baixo, insira um número maior que 0 e menor que 1000");
// }

// Exercicio 7
let numConta = parseInt(prompt("Digite o número de 3 digitos da conta corrente: "));
if(Number.isInteger(numConta) && numConta <= 999 && numConta >= 100){
    let reverseConta = numConta.toString().split('').reverse().join('');
    let reversedNum = Number(reverseConta);
    let soma = numConta + reversedNum;
    let somaToString = soma.toString();
    let num1 = somaToString.charAt(0);
    let num1ToNum = Number(num1);
    let num2 = somaToString.charAt(1);
    let num2ToNum = Number(num2);
    let num3 = somaToString.charAt(2);
    let num3ToNum = Number(num3);
    let sominha = (num1ToNum*1)+(num2ToNum*2)+(num3ToNum*3);
    let verificador = sominha.toString().substring(2,1);
    alert(`o digito verificador da conta corrente é: ${verificador}`);
}else{
    alert("Número de conta inválido");
}