const scrollerPersonajes = document.querySelector("section:nth-of-type(2) .scroller");

scrollerPersonajes.innerHTML = '';

comic.Personajes.forEach(char => {
    const card = document.createElement("article");
    card.classList.add("card");

    card.innerHTML = `
        <div class="card__thumb">
            <img src="${char.imagen}" alt="Imagen de ${char.nombre}" class="personaje-img">
        </div>
        
        <div class="card__body">
            <h3 class="card__title">${char.nombre}</h3>
            <p class="card__text">${char.descripcion}</p>
        </div>
    `;

    scrollerPersonajes.appendChild(card);
    
    console.log(`Personaje agregado: ${char.nombre}`);
});