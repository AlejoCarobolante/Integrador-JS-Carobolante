import { productoActivo } from "../main";
import { handleGetProductsToStore, handleRenderList } from "../view/store";
import { setInLocalStorage, handleGetProductLocalStorage } from "../persistence/localStorage";
import { closenModal } from "../view/modal";

export const HandleSaveOrModify = ()=>{
    const nombre = document.getElementById("name").value
    const imagen = document.getElementById("img").value
    const precio = parseFloat(document.getElementById("price").value)
    const categoria = document.getElementById("categoria").value.toLowerCase()
    let object = null;
    
    if(productoActivo){
        object = {
            ...productoActivo,
            nombre,
            imagen,
            precio,
            categoria
        };
    }else{
        object = {
            id: new Date().toISOString(),
            nombre,
            imagen,
            precio,
            categoria
        };
    }

setInLocalStorage(object);
handleGetProductsToStore();
closenModal();
}

export const handleDeleteProduct = ()=>{
   const products = handleGetProductLocalStorage();
   const result = products.filter((el)=> el.id!==productoActivo.id);
   localStorage.setItem("products", JSON.stringify(result));
   const newProducts = handleGetProductLocalStorage();
   handleRenderList(newProducts);
   closenModal();
}