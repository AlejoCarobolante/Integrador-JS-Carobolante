import { renderCategories } from "./services/categories.js";
import "./style.css"
renderCategories();

//POPUP
const buttonAdd = document.getElementById("buttonAdd")
buttonAdd.addEventListener('click', ()=>{
    openModal();
})
const cancelButton = document.getElementById("cancelButton")
cancelButton.addEventListener('click', ()=>{
    HandleCancelButton();
})

const HandleCancelButton = ()=>{
    closenModal();
}

//Funciones abrir-cerrar
const openModal = ()=>{
    const modal = document.getElementById("modalPopUp");
    modal.style.display = 'flex'
}

const closenModal = ()=>{
    const modal = document.getElementById("modalPopUp");
    modal.style.display = 'none'
}

//Guardar

const acceptButton = document.getElementById("acceptButton")
acceptButton.addEventListener('click', ()=>{
    HandleSaveOrModify();
})

const HandleSaveOrModify = ()=>{
const name = document.getElementById("name").value
const img = document.getElementById("img").value
const price = document.getElementById("price").value
}