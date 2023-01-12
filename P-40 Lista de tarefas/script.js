let tasks = [
    {
      titulo: "Insira tarefas :)",
      tipo: "Urgente"
    }
    // {
    //   titulo: "Limpar o quarto",
    //   tipo: "urgente"
    // },  
    // {
    //   titulo: "Consertar Computador",
    //   tipo: "prioritário"
    // },  
    // {
    //   titulo: "Guardar dinheiro do lanche",
    //   tipo: "Urgente"
    // },  
    // {
    //   titulo: "Beber água",
    //   tipo: "prioritário"
    // }
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
        let listItemParag = document.createElement('p');
        listItem.classList.add('listItem');
        listItemParag.innerText = list[i];

        let deleteButton = document.createElement('button')
        deleteButton.setAttribute('id',i);
        deleteButton.setAttribute('class','redBtn');
        deleteButton.innerText = 'Delete';
        deleteButton.addEventListener('click',function(e){
          list.splice(i,1);
          listItem.remove('');
        });
        listItem.append(listItemParag,deleteButton);
        lista.appendChild(listItem);
        
    }
  }

  renderizarTela(prio_urgente);
  renderizarTela(prio_priori);
  renderizarTela(prio_normal);

  let selectPrio = document.querySelector('.tipo');
  let inputText = document.querySelector('.novoItem');
  let addButton = document.querySelector('.addItem');


  function itemMaker(it,prio){
    let inputValue = it.value;
    let inputPrio = prio.value;
    let newItem = {
      titulo: inputValue,
      tipo: inputPrio
    };
    
    if(inputValue != '' && inputPrio != 'vazio'){
      if(inputPrio == 'urgente'){
        prio_urgente.push(newItem.titulo);
        lista.innerHTML = '';
        renderizarTela(prio_urgente);
        renderizarTela(prio_priori);
        renderizarTela(prio_normal);
      }else if(inputPrio = 'prioritario'){
        prio_priori.push(newItem.titulo);
        lista.innerHTML = '';
        renderizarTela(prio_urgente);
        renderizarTela(prio_priori);
        renderizarTela(prio_normal);
      }else if(inputPrio == 'normal'){
        prio_normal.push(newItem.titulo);
        lista.innerHTML = '';
        renderizarTela(prio_urgente);
        renderizarTela(prio_priori);
        renderizarTela(prio_normal);
      }
    }
  }

  addButton.addEventListener('click',(e) => {
    itemMaker(inputText,selectPrio);
  });
  