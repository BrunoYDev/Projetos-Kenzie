function gerarNumeroAleatorio(){
    return Math.floor(Math.random() * 20);
}
console.log(gerarNumeroAleatorio());
function verificarPalpite(){
    let palpite = parseInt(prompt("Digite um Valor entre 0 e 20: "));
    let tentativa = 1;
    let numRand = gerarNumeroAleatorio();

    while(palpite != numRand){
            numRand = gerarNumeroAleatorio();
            alert("Tente novamente");
            tentativa++;
            palpite = parseInt(prompt("Digite um Valor entre 0 e 20: "));
            console.log(numRand);
    }
    if(palpite == numRand){
        alert(`Você acertou na ${tentativa}° Tentativa`);
    }
}

verificarPalpite();