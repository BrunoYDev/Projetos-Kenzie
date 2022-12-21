let caixaDeSuprimentos = [];

let higiene = ['pasta de dente','sabonete','shampoo','fio dental','pente'];
let alimentacao = ['Pão de forma', 'Pão de Sal', 'Salsicha', 'Água', 'Molho de Tomate'];
let farmacia = ['remedios','curativos','bandagem','repelente','analgesico'];
let lazer = ['video game','bola','raquetes','cesta','jogo de tabuleiro'];

caixaDeSuprimentos.push(higiene);
caixaDeSuprimentos.push(alimentacao);
caixaDeSuprimentos.push(farmacia);
caixaDeSuprimentos.push(lazer);


if(caixaDeSuprimentos.length > 4){
    console.log("acho q temos algum intruso");
}else if(caixaDeSuprimentos.length < 4){
    console.log("Algum amigo ainda não retornou com os itens.");
}else{
    for(i = 0; i < caixaDeSuprimentos.length; i++){
        for(j = 0; j < caixaDeSuprimentos[i].length; j++){
            if(caixaDeSuprimentos[i].length < 5){
                console.log("Precisamos de mais itens desta seção");
            }else if(caixaDeSuprimentos[i].length > 5){
                console.log("Tem itens demais, não precisamos de tantos.");
            }else{
                console.log("Podemos ir acampar.");
            }
        }
}
}
