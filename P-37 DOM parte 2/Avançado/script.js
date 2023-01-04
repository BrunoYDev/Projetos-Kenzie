let body = window.document.querySelector('body');

let art = window.document.createElement('article');
body.appendChild(art)

let heading = window.document.createElement('h1');
heading.innerText = 'Título do Post';

let parag1 = window.document.createElement('p');
parag1.innerText = 'Descrição do Post'

let link = window.document.createElement('a');
link.innerText = 'Ver post completo';

art.appendChild(heading);
art.appendChild(parag1);
art.appendChild(link);