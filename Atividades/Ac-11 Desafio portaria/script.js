let nome = prompt("Digite seu nome:");
let idade = parseInt(prompt("Digite sua idade:"));

if(idade >= 18 && idade < 60){
    let estaAcompanhado = prompt("Digite \"S\" caso esteja acompanhado ou \"N\" caso não esteja");
    if(estaAcompanhado == "S" || "s"){
        estaAcompanhado = true;
        alert(`Desconto concedido e entrada permitida para ${nome} e seu acompanhante!`);
    }else if(estaAcompanhado == "N" || "n"){
        estaAcompanhado = false;
        alert(`Entrada permitida para ${nome}, Valor integral!`);
    }
}else{
    alert(`Entrada negada para ${nome}, idade não permitida!`);
}