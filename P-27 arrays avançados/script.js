// Exercicio 1
let di30 = [1,2,3,4,5,6,7,8,9,10,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
function ex1(lista){
    let concPar = 0;
    let concImpa = 0;
    for(i = 0; i < lista.length; i++){
        if(lista[i]%2 == 0){
            concPar += lista[i]+",";
        }if(lista[i]%2 == 1){
            concImpa += lista[i]+",";
        }
    }
    console.log(`Numeros pares (${concPar})`);
    console.log(`Numeros impares (${concImpa})`);
}
// ex1(di30);

// Exercicio 2
let di10 = [1,2,3,4,5,6,7,8,9,10];
function ex2(lista){
    let conca = 0;
    let contaPor = 0;
    let contando = 0;
    let res1 = 0;
    let res2 = 0;
    for(i = 0; i < lista.length; i++){
        contando += lista[i]
        if(lista[i]%2 == 1){
            conca += lista[i];
        }
    }
    res1 = contando;
    res2 = conca;
    contaPor = (res1-res2)/res2*100;
    console.log(`O total de valores ímpares é ${conca} e corresponde a ${contaPor}% da lista`);
}
// ex2(di10);

// Exercicio 3
let listaA = [3,6,9,12,15,18,21,24,27,30];
let listaB = [5,10,15,20,25,30,35,40,45,50];
function ex3(a,b){
    let c = a.concat(b);
    let contaB = [];
    if(a.length > 10 || a.length < 0 || b.length > 10 || b.length < 0){
        console.log("Lista fora dos padrões necessários")
    }
        for(i = 0; i < a.length; i++){
            if(a[i]%2 == 0 && a[i]%3 == 0){
                contaB.push(a[i]);
            }
        }if(contaB.length != a.length){
            console.log("Valores não permitidos encontrados")
        }
        console.log(c);
}
// ex3(listaA,listaB);
