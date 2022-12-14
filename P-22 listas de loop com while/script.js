// Exemplo
// let escolha = parseInt(prompt("Digite o código do produto ou 0 para sair"))
// let valorTotalDoPedido = 0
// let quantidade = 0
// while(escolha != 0){
//     if(escolha == 100){
//         quantidade = parseInt(prompt("Qual a quantidade deste item?"))
//         valorTotalDoPedido += quantidade * 1.20
//     }else if(escolha == 101){
//         quantidade = parseInt(prompt("Qual a quantidade deste item?"))
//         valorTotalDoPedido += quantidade * 1.30
//     }else if(escolha == 102){
//         quantidade = parseInt(prompt("Qual a quantidade deste item?"))
//         valorTotalDoPedido += quantidade * 1.50

//     }else if(escolha == 103){
//         quantidade = parseInt(prompt("Qual a quantidade deste item?"))
//         valorTotalDoPedido += quantidade * 1.20

//     }else if(escolha == 104){
//         quantidade = parseInt(prompt("Qual a quantidade deste item?"))
//         valorTotalDoPedido += quantidade * 1.30
//     }else{
//         alert('Produto indisponível')
//     }
//     escolha = parseInt(prompt("Digite o código do produto ou 0 para finalizar o pedido"))
// }
// alert(`Seu pedido ficou em ${valorTotalDoPedido}`)

// Exercicio 1
// let valor = parseInt(prompt("Digite um número entre 0 e 10: "));

// while(valor < 0 || valor > 10){
//     alert("Número inválido");
//     valor = parseInt(prompt("Insira um número válido: "));
// }

// Exercicio 2
// let userName = prompt("Insira seu nome de usuario: ");
// let password = prompt("Insira uma senha: ");

// while(password == userName){
//     alert("Senha não pode ser igual ao nome de úsuario");
//     userName = prompt("Insira seu nome de usuario: ");
//     password = prompt("Insira uma senha: ");
// }

// Exercicio 3
// let num = 0;
// let soma = 0;
// let qtdNum = 0;
// let media = 0;
// while(Number.isInteger(num) && num <= 10){
//     num = parseFloat(prompt("Insira positivos menores que 10 para somar, e negativos ou maiores que 10 para encerrar."));
//     if(!Number.isInteger(num) || num > 10 || num < 0){
//         alert(`a soma é ${soma} e a media é ${media.toFixed(0)}`);
//     }else{
//         qtdNum++;
//         soma+=num;
//         media = soma/qtdNum;
//     }
// }

// Exercicio 4
// let a = 0;
// let b = 0;
// let c = 0;
// let candidato = prompt("Escolha um candidato a, b ou c, ou escreva x para sair");

// while(candidato != "x"){
//     if(candidato == "a"){
//         a++;
//         candidato = prompt("Escolha um candidato a, b ou c, ou escreva x para sair");
//     }else if(candidato == "b"){
//         b++;
//         candidato = prompt("Escolha um candidato a, b ou c, ou escreva x para sair");
//     }else if(candidato == "c"){
//         c++;
//         candidato = prompt("Escolha um candidato a, b ou c, ou escreva x para sair");
//     }else{
//         alert("Candidato inválido");
//         candidato = prompt("Escolha um candidato a, b ou c, ou escreva x para sair");
//     }
// }
// alert(`O candidato A teve ${a} votos, o B teve ${b} votos e o C teve ${c} votos.`);