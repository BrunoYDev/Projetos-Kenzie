let menuButton = document.querySelector(".navBar__container button");
let menu = document.querySelector(".navBar__list");
let imgBtn = document.querySelector('.nanBar__container button img');

menuButton.addEventListener('click',()=>{
    if(menu.classList.contains('show')){
        menu.classList.add('remove');

        setTimeout(()=>{
            menu.classList.remove('remove','show');
        }, 200);
    }else{
        menu.classList.add('show');
    }
    // if(menu.classList.contains('show')){
    
    // }
})