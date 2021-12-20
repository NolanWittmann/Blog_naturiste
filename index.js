const bye = document.getElementsByClassName('shadow')
const btn = document.getElementById('btn')

btn.addEventListener('click', ()=>{
    if(bye.style.display === "none"){
        bye.style.display = "block"
    } else{
        bye.style.display ="none"
    }
})