import { categoriaActiva } from "../main";
import { handleGetProductLocalStorage } from "../persistence/localStorage";
import { handleRenderList } from "../view/store";


const handleFilterProductsByCategory = (categoryIn) =>{
    const products = handleGetProductLocalStorage();

    switch(categoryIn.toLowerCase()){
        case categoriaActiva:
            handleRenderList(products);
            break;
        case "todo":
            handleRenderList(products);
            break;
        case "hamburguesas":
        case "papas":
        case "gaseosas":
            console.log("Filtrado")
            const result = products.filter((el)=>el.categoria === categoryIn)
            handleRenderList(result);
            break
        case "mayorprecio":
            const resultPrecioMayor = products.sort((a,b) => b.precio - a.precio);
            handleRenderList(resultPrecioMayor);
            break
        case "menorprecio":
            const resultPrecioMenor = products.sort((a,b) => a.precio - b.precio);
            handleRenderList(resultPrecioMenor);
            break
        default:
            break;
    };


};


export const renderCategories = () => {
    const ulList = document.getElementById("listFilter");
    ulList.innerHTML = `
        <li id="Todo">Todos los productos</li>
        <li id="hamburguesas">Hamburguesas</li>
        <li id="papas">Papas</li>
        <li id="gaseosas">Bebidas</li>
        <li id="mayorPrecio">Precio: de mayor a menor</li>
        <li id="menorPrecio">Precio: de menor a mayor</li>
    `;

    const liElements = ulList.querySelectorAll("li");

    liElements.forEach((liElement) => {
        liElement.addEventListener("click", () => {
            handleClick(liElement);
        });
    });

    const handleClick = (elemento) => {
        handleFilterProductsByCategory(elemento.id);
        liElements.forEach((el)=>{
            if (el.classList.contains("liActive")) {
            el.classList.remove("liActive");
        } else {
            if(elemento === el){
                el.classList.add("liActive")
            } ;
        }
        })
    };
};
