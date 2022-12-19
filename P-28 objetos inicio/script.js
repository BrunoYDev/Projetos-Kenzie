// modelo 1
let pessoa = {
    nome: "paulo",
    anoDeNascimento: 1998,
    cpf: "234.434.876-43",
    cidade: "santos",
    estado: "são-paulo",
    logradouro: "casa"
};

// modelo 2
let escola = {
    nome: "U.M.E Edmea Ladevig",
    cnpj: "91.435.130/0001-02",
    areaDeAtuacao: "Ensino Fundamental",
    cidade: "santos",
    estado: "São-paulo",
    logradouro: "escola",
    curso: "Ensino Fundamental"
};

// modelo 3
let curso = {
    nome: "Ensino fundamental",
    duracaoEmAnos: 10,
    turma: "Turma a",
    modulos: 6
};

// modelo 4
let endereço = {
    cidade: "santos",
    estado: "são-paulo",
    logradouro: "casa",
    cep: "11015-540"
};

// DADO \/ RESPONDA
const figure = {  
    name: "Carl",   
    classes: ["Warrior"],  
    leader_trend: true,
    power: 6, 
    allied: true  
}

// Exercicio 1
function returnName(obj){
 return obj.name;
}
// console.log(returnName(figure));

// Exercicio 2
function verifyClasses(objclas){
    if(objclas.classes.length > 1){
        return objclas.classes
    }else{
        return objclas.classes[0];
    }
}
// console.log(verifyClasses(figure));

// Exercicio 3
function realPower(objpow){
    if(objpow.leader_trend == true){
        objpow.power = objpow.power*objpow.power;
        return objpow.power;
    }else{
        return objpow.power;
    }
}
// console.log(realPower(figure));

// Exercicio 4
function insertNewClass(inseclas){
    let classesValidas = ["warrior","barbarius","arch","hunter","survivor"];
    if(figure.classes.length > 3){
        return "Este personagem não pode estar em mais classes";
    }else{
        for(i = 0; i < classesValidas.length; i++){
            if(inseclas == classesValidas[i]){
                if(classesValidas[inseclas] == figure.classes){
                    return (`Este objeto já tem a classe ${inseclas}`);
                }else{
                    figure.classes.push(inseclas);
                    return (`Classe ${inseclas} adicionada com sucesso`);
                }
            }
        }
        return "classe inválida"
    }
}
insertNewClass("barbarius");

// Exercicio 5
function noMoreBarbarious(){
    for(i = 0; i < figure.classes.length; i++){
        if(figure.classes[i] == "barbarius"){
            figure.allied = false;
            return (`O ${figure.name} agora é um inimigo`);
        }
    }
    return "tudo certo"
}
console.log(noMoreBarbarious());

// console.log(figure)