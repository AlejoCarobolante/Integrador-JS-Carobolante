import { handleGetProductLocalStorage } from "../persistence/localStorage";
import { handleRenderList } from "../view/store";

export const handleSearchProductByName = ()=>{
    const inputHeader = document.getElementById("inputHeader");
    const products = handleGetProductLocalStorage()
    const result = products.filter((el)=>{
        el.nombre.tolowerCase().includes(inputHeader.value)
    })
    handleRenderList(result);
}