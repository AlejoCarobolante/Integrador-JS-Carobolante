export const renderCategories = ()=>{
    const ulList = document.getElementById("listFilter");
    ulList.innerHTML = `
    <li id = "Todo">Todos los productos</li>
    <li id = "Hamburguesas">Hamburguesas</li>
    <li id = "Papas">Papas</li>
    <li id = "Gaseosas">Bebidas</li>
    <li id = "mayorPrecio">Precio: de mayor a menor</li>
    <li id = "menorPrecio">Precio: de menor a mayor</li>
    `;
    const liElements = ulList.querySelectorAll("li");
    liElements.forEach((liElement)=>{
        liElement.addEventListener("click",()=>{
            handleClick(liElement);
        });
    });
    const handleClick = (elemento)=> {
        liElements.forEach((el)=>{
            if (el.classList.contains('liActive')){
                el.classList.remove('liActive');
            }else{
                if(elemento === el){
                    el.classList.add('liActive');
                }
            }
        })
    }
};