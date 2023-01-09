const container = document.getElementById('root');

container.innerText = "Repetir mais";

const repetir = document.createElement("span");
repetir.innerText = "Preciso e Repetir";

container.appendChild(repetir);

const list = document.createElement('ul');
const listItem = document.createElement('li');

listItem.innerText = "Repetir cada vez mais";
list.appendChild(listItem);

container.appendChild(list);