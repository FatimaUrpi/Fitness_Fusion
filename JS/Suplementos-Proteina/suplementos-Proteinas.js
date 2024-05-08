
let listProteinaHTML = document.querySelector('.listProtein');

let listProteina = [];

const addDataHTMLProteina= () =>{
    listProteinaHTML.innerHTML = '';
    const tipos = ['Proteina'];
    tipos.forEach(tipo => {
    const productosTipo = listProteina.filter(producto => producto.tipo === tipo);
    if(listProteina.length > 0){
        listProteina.forEach(proteinas =>{
            let newProteina = document.createElement('div');
            newProteina.classList.add('item');
            newProteina.innerHTML =`
            <img src="${proteinas.image}" alt="">
            <h2>${proteinas.name}</h2>
            <div class="price">S/.${proteinas.price}</div>
            <button class="addCard">Comprar</button>`;
            listProteinaHTML.appendChild(newProteina);
        });
    }
});
}
const initAppProteina = () => {
    fetch('./JS/inicio/productos.json')
        .then(response => response.json())
        .then(data => {
            listProteina = data.filter(producto => producto.categoria === "Suplementos" && producto.tipo === "Proteina");
            addDataHTMLProteina();
        })
}
initAppProteina();   