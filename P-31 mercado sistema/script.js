let hortifruti = ['Maça','Banana','Melão'];
let açougue = ['carne','frango','bacon'];
let padaria = ['pao francês','baguete','bolo'];
let AdegaEBebidas = ['cerveja','refrigerante','suco'];
let laticíniosEFrios = ['queijo','leite','mortadela'];

let secoesMercado = [hortifruti,açougue,padaria,AdegaEBebidas, laticíniosEFrios];

function adicionarSecaoAoMercado(secao){
    secoesMercado.push(secao);
    return secoesMercado
}
// console.log(adicionarSecaoAoMercado(açougue));

function adicionarItemASecao(novoItem, secao){
    secao.push(novoItem);
    return secao;
}
// console.log(adicionarItemASecao("leite condensado",laticíniosEFrios));

function retornarItemDaSecao(nomeItem, secao){
   for(i = 0; i < secao.length; i++){
    if(secao[i] == nomeItem){
        return nomeItem;
    }
   }
   return 'Não encontrado';
}
// console.log(retornarItemDaSecao('mortadela',laticíniosEFrios));

function retornaUtlimoItemDaSecao(secao){
    ultimoItem = secao[secao.length-1];
    return ultimoItem
}
// console.log(retornaUtlimoItemDaSecao(hortifruti));

function consultaSecoesMercado(secaoMercado){
    let todasSecoes = [];
    for(let i = 0; i <= secoesMercado.length; i++){
            todasSecoes.push(secoesMercado[i])
    }
    return todasSecoes;
}
// console.log(consultaSecoesMercado(secoesMercado));

function somaItens(totalA, totalB){
    if(totalB != 0 && totalB != 0){
        totalA = Number(totalA);
        totalB = Number(totalB);
        return totalA + totalB
    }
}
// console.log(somaItens(1,1));

function baterPonto(nome, numeroFicha){
    const funcionarios = ["Sônia", "Cage", "Alex", "Liu Ken"]
    if(nome == funcionarios[numeroFicha]){
        return "Turno processado"
    }else{
        return "Funcionario não cadastrado"
    }
}
// console.log(baterPonto("Sônia",0));

function loginSistema(nomeUsuario, senhaUsuario){
    
    const listaUsuarios = ["luffy123", "acer321", "nami"]

    
        if(nomeUsuario == luffy123){
            if(senhaUsuario == "326541"){
                return "Acesso negado"
            }
        }if(nomeUsuario == acer321){
            if(senhaUsuario == "741258"){
                return "Acesso liberado"
            }
        }if(nomeUsuario == nami){
            if(senhaUsuario == "963258"){
                return "Acesso liberado"
            }
        }

     return listaUsuarios
}