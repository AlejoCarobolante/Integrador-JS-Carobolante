import { setproductoActivo } from "../main";
import { handleGetProductLocalStorage } from "../persistence/localstorage.JS"

export const handleGetProductsToStore = ()=>{

    const products = handleGetProductLocalStorage()
    handleRenderList(products);
};

export const handleRenderList = (productosIn)=>{

    const burgers = productosIn.filter((el)=> el.categoria === "hamburguesas");
    const papas = productosIn.filter((el)=> el.categoria === "papas");
    const gaseosas = productosIn.filter((el)=> el.categoria === "gaseosas");

    const rederProductGroup = (productos, title)=>{
        if(
            productos.length >0
        ){
            const productosHTML = productos.map((producto, index)=>{
                return`
                <div class = "containerTargetItem" id='product-${producto.categoria}-${index}'>
                    <div>
                        <img class= "img_prod" src = '${producto.imagen}'/>
                        <div class= "text_content"> 
                            <div>
                                <h2 class= "product_name"> ${producto.nombre}
                            </div>
                            <div class="targetProps">
                                <p> <b>Precio:</b> ${producto.precio}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            });
            return `
            <section class="sectionStore">
                <div class="containerTitleSection">
                    <h3>${title}</h3>
                </div>
                <div class="containerProductStore">
                    ${productosHTML.join("")}
                </div>
            </section>
        `;
        }else{
            console.log("empty");
            return ""
        }
    };

    const appContainer = document.getElementById("storeContainer");
    appContainer.innerHTML = `
    ${rederProductGroup(burgers, "Hamburguesas")}
    ${rederProductGroup(papas, "Papas")}
    ${rederProductGroup(gaseosas, "Gaseosas")}

    `;
    const addEvents = (productosIn)=>{
        if(productosIn){
            productosIn.forEach((element, index)=>{
                const productContainer = document.getElementById(`product -${productosIn.categories} -${indext}`)
            });

        }
            
        productContainer.addEventListener('click', ()=>{
                setproductoActivo(element);
                openModal();
            });
    }
    addEvents(burgers);
    addEvents(papas);
    addEvents(gaseosas);
};

