const users = [
    {
     name: 'Madalena',
     profile: 'Admin',
     sector: 'Administration'
   },
   {
     name: 'Rafael',
     profile: 'user',
     sector: 'Finance'
   },  
   {
     name: 'Baltazar',
     profile: 'user',
     sector: 'Reception'
   },  
   {
     name: 'Carmen',
     profile: 'Admin',
     sector: 'Business'
   }    
 ]
 let section = document.querySelector('.profiles');
 function scanUsers(){
    for(let i=0;i<users.length;i++){
        let card = document.createElement('span');
        card.classList.add('userCard');
        card.innerHTML=users[i].name;
        if(users[i].sector == 'Administration' && users[i].profile == 'Admin'){
            card.classList.add('highLevel');
        }else if(users[i].profile == 'user'){
            card.classList.add('normalUser');
        }else if(users[i].profile == 'Admin' && users[i].sector != 'Administration'){
            card.classList.add('normalAdmin')
        }
        section.appendChild(card);
    }
 }

 scanUsers();