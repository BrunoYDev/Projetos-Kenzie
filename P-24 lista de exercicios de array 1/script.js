// Exercicio 1
function ex1(text){
    let arr1 = [text];
    return arr1
}
// console.log(ex1("ez"));

// Exercicio 2
function ex2(num){
    let arr2 = ["Hermanoteu", "Olonéia", "Migalatéia", "Godart"]
    let acessarPos = arr2[num];
    if(acessarPos == undefined){
      console.log("Posição não encontrada");
    }else{
        return acessarPos;
    }
   
}
// console.log(ex2(3));

// Exercicio 3
let arr3 = [1,2,3,4,5,6,7,8,9,10];
function ex3(pos){
    let findPos = arr3[pos];
    if(findPos%2 == 0){
        return "o valor encontrado nesta posição é par"
    }else{
        return "o valor encontrado nessa posição é impar"
    }
}
// console.log(ex3(1));

// Exercicio 4
let nomes = ["josé", "igor","felipe","eduardo"];
function ex4(lista){
    let ac = "";
    for(i = 0; i < lista.length; i++){
        if(ac.length < lista[i].length){
            ac = lista[i];
        }
    }
    return ac;
}
// console.log(ex4(nomes));

// Exercicio 5
let numeros = [1,4,6,9,20,8];
function ex5(lista){
    let ultimaPos = lista[lista.length-1];
    let penultimaPos = lista[lista.length-2];
    return ultimaPos + penultimaPos;
}
// console.log(ex5(numeros));

// Exercicio 6
let nomes1 = ["Pedro", "Rafael", "José", "Carla", "Maria", "Josef", "Raquel"];
function ex6(lista,name,position){
    if(name == lista[position]){
        return "acertei"
    }else{
        return "Não é quem eu pensava"
    }

}
// console.log(ex6(nomes1,"Rafael",1));

// Exercicio 7
let numeros1 = [1,2,3,4,5,6,10,11];
let outrosNumeros = [5,7,9,4,2,3,9];
function ex7(lista1,lista2){
    if(lista1.length > lista2.length){
        return lista1[lista1.length-1]
    }else{
        return lista2[lista2.length-1]
    }
}
console.log(ex7(numeros1,outrosNumeros));