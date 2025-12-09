const infoComic = document.querySelector(".info-Comic");

infoComic.innerHTML = `
<small>${comic.year}</small>
    <h1>${comic.nombreComic}</h1>
    <p>${comic.sinopsis}</p>
    <p>Género: ${comic.genero}</p>
`;



const scrollerPersonajes = document.querySelector(".scroller");

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
});



const listaCapitulos = document.querySelector(".lista-capitulos");

listaCapitulos.innerHTML = '';

comic.capitulos.forEach(capitulo => {
    const chapterDiv = document.createElement("article");
    chapterDiv.classList.add("capitulo-item");

    chapterDiv.innerHTML = `
        <h3>Capítulo ${capitulo.id}: ${capitulo.nombre}</h3>
        <p><strong>Sinopsis:</strong> ${capitulo.descripcion}</p>
        <p><strong>Personajes principales:</strong> ${capitulo.personajes}</p>
        <div class="capitulo-portada">
            <img src="${capitulo.portada}" alt="Portada del Capítulo ${capitulo.id}" width="150">
        </div>
    `;

    listaCapitulos.appendChild(chapterDiv);
});