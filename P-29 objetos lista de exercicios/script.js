// Objetos
const carros = [
    {
    modelo: "Ka",
    marca: "Ford",
    ano: "2000",
    cor: "Branco",
    completo: false,
    acessorios: ['Vidro Elétrico'],
    preco: "R$ 6.799,33"
    },
    {
    modelo: "Gol",
    marca: "VW",
    ano: "1996",
    cor: "Preto",
    completo: false,
    acessorios: ['Trava'],
    preco: "R$ 12.199,13"
    },
    {
    modelo: "Palio",
    marca: "Fiat",
    ano: "1995",
    cor: "Verde",
    completo: false,
    acessorios: [],
    preco: "R$ 11.099,11"
    },
    {
    modelo: "Monza",
    marca: "Chevrolet",
    ano: "1993",
    cor: "Vinho",
    completo: false,
    acessorios: [],
    preco: "R$ 14.578,25"
    },
    {
    modelo: "Saveiro",
    marca: "VW",
    ano: "2013",
    cor: "Prata",
    completo: false,
    acessorios: [],
    preco: "R$ 28.399,13"
    },
    {
    modelo: "Gol",
    marca: "VW",
    ano: "1996",
    cor: "Preto",
    completo: true,
    acessorios: ['Alarme', 'Trava', 'Ar', 'Vidro Elétrico'],
    preco: "R$ 14.350,45"
    },
    {
    modelo: "Gol",
    marca: "VW",
    ano: "2013",
    cor: "Preto",
    completo: true,
    acessorios: ['Alarme', 'Trava', 'Ar', 'Vidro Elétrico'],
    preco: "R$ 22.109,21"
    },
    {
    modelo: "Montana",
    marca: "Chevrolet",
    ano: "2011",
    cor: "Azul",
    completo: false,
    acessorios: [],
    preco: "R$ 15.999,13"
    },
    {
    modelo: "Stilo",
    marca: "Fiat",
    ano: "2000",
    cor: "Preto",
    completo: false,
    acessorios: [],
    preco: "R$ 17.251,36"
    }
  ]
  
// Exercicio 1
function listaElementos(lista){
    return lista.length;
}
// console.log(listaElementos(carros));

// Exercicio 2
function somaValores(lista1){
    let conca = "";
    let toValue = 0;
    let soma = 0;
    let removeCoin = "";
    for(i = 0; i < lista1.length; i++){
      let semVirgula = lista1[i].preco.replaceAll(",",".");
      let searchDot = semVirgula.replaceAll(".","");
            removeCoin = searchDot.substring(3);
            conca = parseFloat(removeCoin);
            soma += conca;

    }
    return (`A soma do preço de todos veículos é R$ ${soma}`);
}
// console.log(somaValores(carros));

// Exercicio 3
function filtraPorMarca(marca){
    let acceptedMarc = [];
    let marcaCerta = carros.marca;
    for(i = 0; i < carros.length; i++){
        marcaCerta = carros[i].marca;
        if(marca == marcaCerta){
            acceptedMarc.push(carros[i]);
        }
    }
    return acceptedMarc
    }
// console.log(filtraPorMarca("Fiat"));

// Exercicio 4
function filtraPorAcessorio(acess){
    let acceptedAcess = [];
    for(i = 0; i < carros.length; i++){
        let acessFilho = carros[i].acessorios;
        for(j = 0; j < acessFilho.length; j++){
            if(acessFilho[j] == acess){
                acceptedAcess.push(carros[i]);
            }
        }
    }
    return acceptedAcess;
}

    // console.log(filtraPorAcessorio("Trava"));

    // Exercicio 5
    function eCarroCompleto(lista){
        let completos = [];
        for(i = 0; i < lista.length; i++){
            if(lista[i].completo == true){
                completos.push(lista[i]);
            }
            
        }
        return completos;
    }
    // console.log(eCarroCompleto(carros));

    // Exercicio 6
    function adicionaCarro(){
        carros.push(
            {
                modelo: "Challenger",
                marca: "Dodge",
                ano: "2000",
                cor: "Preto",
                completo: true,
                acessorios: [],
                preco: "R$ 100.251,36"
            }
        )
        return carros;
        }
// console.log(adicionaCarro());

// Exercicio 7
function removeCarro(lista,pos){
    if(pos > lista.length){
        return "Posição inválida"
    }else{
        lista.splice(pos,1);
    }
    return lista;
}
// console.log(removeCarro(carros,5));

// Exercicio 8
function contaCarrosNovos(lista){
    let anoAtual = 2022;
    let carrosNovos = [];
    for(i = 0; i < lista.length; i++){
        let tratando = Number(lista[i].ano);
        let carroNovo = anoAtual - 10;
        if(tratando >= carroNovo){
            carrosNovos.push(lista[i]);
        }
    }
    return carrosNovos;
    }
// console.log(contaCarrosNovos(carros));

// Exercicio 9
function donos(lista,pos,pessoa){
    if(pos > lista.length){
        return "error"
    }else{
        lista[pos].donos = pessoa;
    }
    console.log(lista[pos]);
}
console.log(donos(carros,0,{nome: "Frederico", tel: 13996428264}));