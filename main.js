import { setInLocalStorage } from "./persistence/localstorage.JS";
import { renderCategories } from "./services/categories.js";
import "./style.css"
import { handleGetProductsToStore } from "./view/store.js";

//APPLICATION

export let categoriaActiva = null;
export const setCategoriaActiva = (categoriaIn)=>{
    categoriaActiva = categoriaIn
};

export let productoActivo = null;
export const setproductoActivo = (productoIn)=>{
    productoActivo = productoIn
};


handleGetProductsToStore();
renderCategories();
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
export const openModal = ()=>{
    const modal = document.getElementById("modalPopUp");
    modal.style.display = 'flex'

    if(productoActivo){
        const nombre = document.getElementById("name")
    const imagen = document.getElementById("img")
    const precio = document.getElementById("price")
    const categoria = document.getElementById("categoria")
    nombre.value = productoActivo.nombre;
    precio.value = productoActivo.precio;
    imagen.value = productoActivo.imagen;
    categoria.value = "";
    }
}

export const closenModal = ()=>{
    const modal = document.getElementById("modalPopUp");
    modal.style.display = 'none'
}

const resetModal = ()=>{
    const nombre = document.getElementById("name")
    const imagen = document.getElementById("img")
    const precio = document.getElementById("price")
    const categoria = document.getElementById("categoria")
    nombre.value = "";
    precio.value = "";
    imagen.value = "";
    categoria.value = "Seleccione una categoria";
}

//Guardar

const acceptButton = document.getElementById("acceptButton")
acceptButton.addEventListener('click', ()=>{
    HandleSaveOrModify();
})

const HandleSaveOrModify = ()=>{
const nombre = document.getElementById("name").value
const imagen = document.getElementById("img").value
const precio = document.getElementById("price").value
const categoria = document.getElementById("categoria").value
let object = null;

if(productoActivo){
    object = {
        ...productoActivo,
        nombre,
        imagen,
        precio,
        categoria
    }
}else{
    object = {
        id: new Date().toISOString(),
        nombre,
        imagen,
        precio,
        categoria
    };
}

console.log({
    nombre,
    imagen,
    precio,
    categoria

});



setInLocalStorage(object);
handleGetProductsToStore();
closenModal();

};