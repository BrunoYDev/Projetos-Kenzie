let ganhador = {
    nome: 'Adamastor',
    nascimento: '16/09/1986',
    cpf: '123.321.789-98',
    estadoCivil: 'Casado'
}

// Exercicio 1
let losArr = [{name: 'ademir', cpf: '123.123.123-12'},];
let receiveObj = {};
function comparator(name,cpf){
    let nameTrat = name.split('');
    let sliceName = name.slice(1);
    let fullName = nameTrat[0].toUpperCase()+sliceName;
    if(fullName == ganhador.nome && cpf == ganhador.cpf){
        return "É ganhador";
    }else{
        receiveObj.name = name;
        receiveObj.cpf = cpf; 
    }
    return "Não é ganhador";
    
}
console.log(comparator('adaldo','123.321.789-98'));

function receiveLoss(obj){
    let count = 0;
    losArr.push(obj);
    console.log(losArr)
    for(let i=0; i<losArr.length;i++){
        count++ ;
    }
    return `${count} Pessoas vieram atrás do prémio`
}
console.log(receiveLoss(receiveObj));