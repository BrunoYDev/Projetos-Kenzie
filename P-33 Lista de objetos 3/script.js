// pessoa
pessoa = {
    nome: "",
    anoDeNascimento: 0,
    cidade: ""
};
 
function criarPessoa(name,date,city){
        pessoa.nome = name;
        pessoa.anoDeNascimento = date;
        pessoa.cidade = city;

return pessoa;
}

criarPessoa("Bruno",2003,"Santos");

function apresentar(){
    return `${pessoa.nome} possui ${2022-pessoa.anoDeNascimento} anos de idade e atualmente está morando em ${pessoa.cidade}`;
}
apresentar();

// elevador
elevador = {
    andarAtual: 0,
    totalDeAndares: 10,
    capacidadeDoElevador: 10,
    ocupacaoAtual: 0
};

function entrar(elev){
    if(elev.capacidadeDoElevador != elev.ocupacaoAtual){
        elev.ocupacaoAtual ++;
        return `Ocupação atual em ${elev.ocupacaoAtual}`
    }
        return "Elevador lotado"
}
entrar(elevador);

function sair(elev){
    if(elev.ocupacaoAtual <= 0){
        return "Não há ninguém no elevador"
    }
    elev.ocupacaoAtual--;
    return `Ocupação atual em ${elev.ocupacaoAtual}`
}
sair(elevador);

function subir(elev){
    if(elev.andarAtual != elev.totalDeAndares && elev.andarAtual >= 0){
        elev.andarAtual++;
        return `Estamos no andar ${elev.andarAtual}`;
    }else{
        return `Estamos no ultimo andar`;
    }
}

subir(elevador);

function descer(elev){
    if(elev.andarAtual == 0){
        return `Estamos no terreo`
    }else{
        elev.andarAtual--;
        return `estamos no andar ${elev.andarAtual}`;
    }
}

descer(elevador);

// televisão
televisao = {
    canalAtual: 0,
    volume: 0
};

function aumentarVolume(){
    if(televisao.volume == 10){
        return "Volume no máximo"
    }else{
        televisao.volume++;
        return `Volume em ${televisao.volume}`;
    }   
}

function diminuirVolume(){
    if(televisao.volume == 0){
        return `Televisao no mudo`
    }else{
        televisao.volume--;
        return `Volume em ${televisao.volume}`
    }
}

function canalPraCima(){
    if(televisao.canalAtual == 100){
        return `Ultimo canal`
    }else{
        televisao.canalAtual++;
        return `Estamos no canal ${televisao.canalAtual}`;
    }
}

function canalPraBaixo(){
    if(televisao.canalAtual == 0){
        return `Estamos no ultimo canal`
    }else{
        televisao.canalAtual--;
        return `Estamos no canal ${televisao.canalAtual}`;
    }
}

function consultarCanal(){
    return `Canal atual é ${televisao.canalAtual}`
}

function volumeAtual(){
    return `Volume atual é ${televisao.volume}`
}