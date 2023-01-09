const container = document.querySelector('.container');
let produto = {
    nome: 'Notebook',
    valor: 3000.00,
    liquidacao: true,
    distribuidor: 'lojadakenzie.com.br'
  }
  const list = document.createElement('ul');
  const listItem = document.createElement('li');
  const prop_valor = document.createElement('span');

  listItem.classList.add('product');

  const liquida = document.createElement('span');
  liquida.classList.add('liquidacao');
  liquida.innerHTML = produto.liquidacao;
  liquida.id = 'hide';
  
  const newValue = document.createElement('span');
  newValue.classList.add('valorDesconto');
  newValue.classList.add('hidden');
  newValue.innerHTML = `Hoje apenas: R$${produto.valor - (produto.valor * 0.3)}`;

  const dist = document.createElement('span');
  dist.innerHTML = produto.distribuidor;
  dist.classList.add('distribuidor');

  listItem.innerHTML = produto.nome;
  prop_valor.classList.add('valorProduto');
  prop_valor.innerHTML = produto.valor;
  list.appendChild(listItem);
  listItem.appendChild(prop_valor);
  if(liquida){
   liquida.innerHTML = 'Em liquidação'
   listItem.appendChild(liquida)
};
    listItem.appendChild(newValue);
    liquida.addEventListener('click',function(){
        if(newValue.classList.contains('hidden')){
            newValue.classList.remove('hidden');
        }else{
            newValue.classList.add('hidden');
        }
    });
    listItem.appendChild(dist);



  container.appendChild(list);