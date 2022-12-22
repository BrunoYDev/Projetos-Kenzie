const barbearia = {
    cortes: [
      { id: 1, tipo: "Militar", valor: 20.0 },
      { id: 2, tipo: "Samurai", valor: 35.0 },
      { id: 3, tipo: "Pompadour", valor: 20 },
      { id: 4, tipo: "Moicano", valor: 0 },
      { id: 5, tipo: "Razor part", valor: 0 },
    ],
  
    barbas: [
      { id: 1, tipo: "Capitão Jack", valor: 20.0 },
      { id: 2, tipo: "Van Dyke", valor: 20.0 },
      { id: 3, tipo: "Barba Média", valor: 20.0 },
      { id: 4, tipo: "Barba Baixa", valor: 20.0 },
      { id: 5, tipo: "Barba Zero", valor: 15.0 },
    ],
    estaAberto: true,
  };
  
  
  

  function buscaCortePorId(id) {
    let cortesCabelo = barbearia.cortes;
    for(i=0; i < cortesCabelo.length; i++){
        if(id == cortesCabelo[i].id){
            return cortesCabelo[i];
        }
    }
    return "Corte não encontrado"
  }
    // console.log(buscaCortePorId(3));
  
  function buscaBarbaPorId(id) {
    let cortesBarba = barbearia.barbas;
    for(i=0; i < cortesBarba.length; i++){
        if(id == cortesBarba[i].id){
            return cortesBarba[i];
        }
    }
    return "Barba não encontrada"
  }
//   console.log(buscaBarbaPorId(2));
  
  function verificaStatusBarbearia() {
    if(barbearia.estaAberto){
        return 'Estamos abertos';
    }else{
        return 'Estamos fechados';
    }
  }
//   console.log(verificaStatusBarbearia());
  
  function retornaTodosCortes() {
    return barbearia.cortes;
  }
//   
  
  function retornaTodasBarbas() {
    return barbearia.barbas;
  }
//   console.log(retornaTodasBarbas());
  
 
  function criaPedido(nomeCliente, corteId, barbaId) {
    let retornoCorte = buscaCortePorId(corteId);
    let retornoBarba = buscaBarbaPorId(barbaId);
    let pedido = {
    nomeDoCliente: nomeCliente,
    corteId: retornoCorte,
    precoCorte: retornoCorte.valor,
    barbaId: retornoBarba,
    precoBarba: retornoBarba.valor
    }
    return pedido;
  }
  // console.log(criaPedido("vitor",2,2));
  
  function atualizaPedido(lista, id, valor1, tipo1) {
    let retornoCorte = buscaCortePorId(id);
    let retornoBarba = buscaBarbaPorId(id);
    if(lista == "Cortes"){
      retornoCorte.valor = valor1;
      retornoCorte.tipo = tipo1;
      return barbearia.cortes[id];
    }else if(lista == "Barbas"){
      id = buscaBarbaPorId[id].id;
      buscaBarbaPorId[id].valor = valor;
      buscaBarbaPorId[id].tipo  = tipo;
      return barbearia.barbas[id];
    }else{
      return "entrada de valores inválida";
    }
  }
  // console.log(atualizaPedido("Cortes",2,25,"chevette"));
  
  function calculaTotal() {
    let pedido = criaPedido("brumo",2,2);
    return pedido.precoCorte + pedido.precoBarba;
  }
  // console.log(calculaTotal());
  
  