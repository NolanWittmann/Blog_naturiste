var menuButton = document.querySelector('#menu-button');
var menu = document.querySelector('#menu');

// show or hide
menuButton.addEventListener('click',function(){
  menu.classList.toggle('show-menu');
  menuButton.classList.toggle('close');
});
// show or hide

//page partir
const bouton = document.querySelector(".btnJs")
const pop = document.querySelector(".agdeP")
let visible = false

bouton.addEventListener("click", ()=> {
    visible = !visible
    visible ? pop.classList.add("visibles") : pop.classList.remove("visibles")
})

let visibles
const bouton1 = document.querySelector(".btnJs1")
const pop1 = document.querySelector(".chmP")


bouton1.addEventListener("click", ()=> {
  visibles = !visibles
  visibles ? pop1.classList.add("visible1") : pop1.classList.remove("visible1")
})
//page partir