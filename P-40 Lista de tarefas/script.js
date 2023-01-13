let tasks = [
    // {
    //   titulo: "Insira tarefas :)",
    //   tipo: "Urgente"
    // },
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

  let newArr2 = [];

  function separaItems(list){
    for(let i=0; i<list.length;i++){
        if(list[i].tipo.toLowerCase() == 'urgente'){
            newArr2.push(list[i].titulo);
            prio_urgente.push(list[i].titulo);
        }else if(list[i].tipo.toLowerCase() == 'prioritário'){
          newArr2.push(list[i].titulo);
            prio_priori.push(list[i].titulo);
        }else if(list[i].tipo.toLowerCase() == 'normal'){
            newArr2.push(list[i].titulo);
            prio_normal.push(list[i].titulo);
        }
    }
  }
  separaItems(tasks);
  let cont = 0;
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
          if(list.length != i){
            for(let j=0; j<list.length; j++){
            listItem.remove('');
            newArr2.splice(j,1);
            list.splice(j,1);
            }
          }
            listItem.remove('');
            newArr2.splice(i,1);
            list.splice(i,1);
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
        newArr2.push(newItem.titulo);
        prio_urgente.push(newItem.titulo);
        lista.innerHTML = '';
        renderizarTela(prio_urgente);
        renderizarTela(prio_priori);
        renderizarTela(prio_normal);
      }else if(inputPrio = 'prioritario'){
        newArr2.push(newItem.titulo);
        prio_priori.push(newItem.titulo);
        lista.innerHTML = '';
        renderizarTela(prio_urgente);
        renderizarTela(prio_priori);
        renderizarTela(prio_normal);
        console.log(prio_urgente,prio_priori,prio_normal)
      }else if(inputPrio == 'normal'){
        newArr2.push(newItem.titulo);
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
  
  let search = document.querySelector('.search');
  let searchBtn = document.querySelector('.searchBtn');

  searchBtn.addEventListener('click', function(e){
    searchInput(search.value,newArr2);
  });

  function searchInput(phrase,arr){
    let normalize = phrase.toLowerCase();
    let newArr = [];
    for(let i=0;i<arr.length;i++){
      if(arr[i].toLowerCase() == normalize){
        newArr.push(arr[i])
        lista.innerHTML = '';
        console.log(newArr)
      }
    }
    renderizarTela(newArr);
  }

