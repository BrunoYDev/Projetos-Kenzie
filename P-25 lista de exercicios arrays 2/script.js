// Exercicio 1
const listaDeElementos = [1,5,7,9,3, "10", "11", "15"];
function retornaTodosElementos(){
    alert(listaDeElementos);
}
// retornaTodosElementos();

// Exercicio 2
function retornaValorEspecifico(value){
    let valuePos = listaDeElementos[value];
    return (`O valor contido nessa posição é ${valuePos}`);
}
// console.log(retornaValorEspecifico(2));

// Exercicio 3
function retornarTipoElemento(value1){
    let valuePos1 = listaDeElementos[value1];
    return (`O elemento ${valuePos1} é um elemento do tipo ${typeof(valuePos1)}`);
}
// console.log(retornarTipoElemento(4));

// Exercicio 4
function removeUltimoElementoString(){
    if(typeof listaDeElementos[listaDeElementos.length-1] == "string"){
        listaDeElementos.pop();
        return "Elemento deletado com sucesso";
    }else{
        return "Falha ao remover o elemento da lista";
    }
}
// console.log(removeUltimoElementoString());

// Exercicio 5
function consultaPosição(posValue){
    let indexElement = listaDeElementos.indexOf(posValue);
    if(indexElement == -1){
        return "Valor não encontrado";
    }
    return (`O valor procurado está na posição: ${indexElement}`);
}
// console.log(consultaPosição(9));

// Exercicio 6
function removerElementoEspecifico(posRemove){
    let removing;
    let indexRemover = listaDeElementos.indexOf(posRemove);
    if(indexRemover == -1){
        return "elemento não encontrado";
    }else{
      removing = listaDeElementos.splice(indexRemover,1);
      return (`Elemento ${posRemove} deletado com sucesso`);
    }
}
// console.log(removerElementoEspecifico(9));

// Exercicio 7
function inserirNaPosicaoCorreta(insertValue){
    if(typeof insertValue !== "string" && insertValue > 0 && insertValue < 10){
        listaDeElementos.unshift(insertValue);
    }else if(typeof insertValue == "string" ){
        listaDeElementos.push(insertValue);
    }
    console.log(listaDeElementos)
    return "Lista atualizada com sucesso";
}

// console.log(inserirNaPosicaoCorreta(6));