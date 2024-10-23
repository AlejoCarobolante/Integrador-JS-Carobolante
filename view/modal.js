import { productoActivo, setproductoActivo } from "../main";
import { handleDeleteProduct, HandleSaveOrModify } from "../services/products";



const cancelButton = document.getElementById("cancelButton")
cancelButton.addEventListener('click', ()=>{
    HandleCancelButton();
})

const HandleCancelButton = ()=>{
    closenModal();
}
export const openModal = ()=>{
    const modal = document.getElementById("modalPopUp");
    modal.style.display = 'flex';
    const buttonDelete = document.getElementById("deleteButton")
    if(productoActivo){
        buttonDelete.style.display = "block"
    }else{
        buttonDelete.style.display = "none";
    }

    if(productoActivo){
        const nombre = document.getElementById("name")
        const imagen = document.getElementById("img")
        const precio = document.getElementById("price")
        const categoria = document.getElementById("categoria")
        nombre.value = productoActivo.nombre;
        precio.value = productoActivo.precio;
        imagen.value = productoActivo.imagen;
        categoria.value = productoActivo.categoria;
    };
};

export const closenModal = ()=>{
    const modal = document.getElementById("modalPopUp");
    modal.style.display = 'none'
    setproductoActivo(null);
    resetModal();
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

const acceptButton = document.getElementById("acceptButton")
acceptButton.addEventListener('click', ()=>{
    HandleSaveOrModify();
})

const deleteButton = document.getElementById("deleteButton");
deleteButton.addEventListener("click", ()=>{
    handleButtonDelete();
})

const buttonDelete = ()=>{
    handleDeleteProduct();
}