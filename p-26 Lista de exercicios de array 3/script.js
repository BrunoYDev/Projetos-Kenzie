// Exercicio 1
let arr = [1,2,3,4,5,6,7,8,9];
function ex1(lista,valor){
    let verifyString = "";
    if(lista.length >= 10){
        return "Não foi possível inserir este valor";
    }else{
        if(typeof valor == "string"){
            verifyString = valor;
            if (verifyString.length <= 7){
                lista.push(valor);
            }else{
                return "valor adicionado maior que 7 caracteres";
            }
        }else{
            lista.push(valor);
        }
    }
    return (`Elemento inserido com sucesso, a lista agora é: ${lista}`);
}
// console.log(ex1(arr,23));

// Exercicio 2
let listaA = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
let listaB = [];
function ex2(a,b){
    let quadrado = 0;
    let count = 0;
    if(a.length == 15){
    for(i = 0; i < a.length; i++){
        let inputNum = 0;
        inputNum += a[i];
        count = inputNum;
        quadrado = count*count;
        b.push(quadrado);
        }
    }
    return b;
}

console.log(ex2(listaA,listaB));