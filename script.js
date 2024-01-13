const menu =document.getElementById("menu");
const action = document.getElementById("action");
menu.addEventListener("click", ()=>{
hendermenu()
})
function hendermenu(){
menu.classList.toggle("active");
action.classList.toggle("active");
}
