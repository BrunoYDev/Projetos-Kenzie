let tasks = [
    {
      titulo: "Comprar comida para o gato",
      tipo: "Urgente"
    },
    {
      titulo: "Limpar o quarto",
      tipo: "urgente"
    },  
    {
      titulo: "Consertar Computador",
      tipo: "prioritário"
    },  
    {
      titulo: "Guardar dinheiro do lanche",
      tipo: "Urgente"
    },  
    {
      titulo: "Beber água",
      tipo: "prioritário"
    }
  ];

  let lista = document.querySelector('.tasks');
  let prio_urgente = [];
  let prio_priori = [];
  let prio_normal = [];

  function separaItems(list){
    for(let i=0; i<list.length;i++){
        if(list[i].tipo.toLowerCase() == 'urgente'){
            prio_urgente.push(list[i].titulo);
        }else if(list[i].tipo.toLowerCase() == 'prioritário'){
            prio_priori.push(list[i].titulo);
        }else if(list[i].tipo.toLowerCase() == 'normal'){
            prio_normal.push(list[i].titulo);
        }
    }
  }
  separaItems(tasks);

  function renderizarTela(list){
    for(let i=0; i<list.length; i++){
        let listItem = document.createElement('li');
        listItem.classList.add('listItem');
        listItem.innerText = list[i];
        lista.appendChild(listItem);
    }
  }

  renderizarTela(prio_urgente);
  renderizarTela(prio_priori);
  renderizarTela(prio_normal);
