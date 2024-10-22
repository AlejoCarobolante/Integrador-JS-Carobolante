export const renderCategories = () => {
    const ulList = document.getElementById("listFilter");
    ulList.innerHTML = `
        <li id="Todo">Todos los productos</li>
        <li id="Hamburguesas">Hamburguesas</li>
        <li id="Papas">Papas</li>
        <li id="Gaseosas">Bebidas</li>
        <li id="mayorPrecio">Precio: de mayor a menor</li>
        <li id="menorPrecio">Precio: de menor a mayor</li>
    `;

    const liElements = ulList.querySelectorAll("li");

    // Añadimos el listener a cada li
    liElements.forEach((liElement) => {
        liElement.addEventListener("click", () => {
            handleClick(liElement); // Pasamos el elemento clicado
        });
    });

    const handleClick = (elemento) => {
        // Verificar si el elemento ya tiene la clase 'liActive'
        if (elemento.classList.contains('liActive')) {
            // Si la tiene, la removemos (deseleccionar)
            elemento.classList.remove('liActive');
        } else {
            // Si no la tiene, removemos la clase de todos los demás elementos
            liElements.forEach((el) => {
                el.classList.remove('liActive');
            });
            // Y agregamos la clase al elemento clicado (seleccionar)
            elemento.classList.add('liActive');
        }
    };
};
