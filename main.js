import { handleGetProductsToStore } from "./view/store.js";
import { renderCategories } from "./services/categories.js";
import "./style.css"
import { openModal } from "./view/modal.js";
import { handleSearchProductByName } from "./services/searchBar.js";


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

const buttonAdd = document.getElementById("buttonAdd")
buttonAdd.addEventListener('click', ()=>{
    openModal();
})

const buttonSearch = document.getElementById("buttonSearch");
buttonSearch.addEventListener("click", ()=>{
    handleSearchProductByName();
})