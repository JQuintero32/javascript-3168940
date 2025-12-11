import { comic } from "./bd.js";

const heroContainer = document.querySelector("#hero-container");

// Lógica de Carrusel: Incluye la portada principal y luego las portadas de los capítulos.
const carruselImagenes = [
    comic.portadaComic, // 1. La portada principal (./portada_principal.png)
    ...comic.capitulos.map(cap => cap.portada) // 2. Las portadas de los capítulos
];
let currentImageIndex = 0;

function updateHeroBackground() {
    // La imagen actual a mostrar
    const imageUrl = carruselImagenes[currentImageIndex];
    
    // Estructura base del HERO
    heroContainer.innerHTML = `
        <div class="hero__bg" style="background-image: url('${imageUrl}');"></div>
        <div class="hero__overlay"></div>

        <div class="hero__content animated-in">
            <div class="hero__meta">
              <span class="tag">${comic.genero}</span>
              <span class="dot">•</span>
              <span class="tag">${comic.year}</span>
              <span class="dot">•</span>
              <span class="tag">${comic.numeroEpisodeos} capítulos</span>
            </div>

            <h1 id="titulo-comic" class="hero__title">${comic.nombreComic}</h1>

            <p class="hero__desc">
              ${comic.sinopsis}
            </p>

            <div class="hero__actions">
              <button class="btn btn--primary" onclick="window.location.href='Capitulo.html?id=1'">Reproducir</button>
            </div>

            <div class="hero__meta-low">
              <span><strong>Autores:</strong> ${comic.autores.join(', ')}</span>
            </div>
        </div>
    `;
    
    // Avanza al siguiente índice
    currentImageIndex = (currentImageIndex + 1) % carruselImagenes.length;
}

// Inicializar el carrusel y establecer el intervalo
updateHeroBackground();
setInterval(updateHeroBackground, 5000); // Cambia cada 5 segundos 

// --- Generación de Tarjetas de Personajes ---

const scrollerPersonajes = document.querySelector("#scroller-personajes");
scrollerPersonajes.innerHTML = '';

comic.Personajes.forEach(char => {
    const card = document.createElement("article");
    card.classList.add("card", "animated-card"); 

    card.innerHTML = ` <a href="./Personaje.html?id=${char.id}">
    <div class="card__thumb">
      <img src="${char.imagen}" alt="Imagen de ${char.nombre}" class="personaje-img">
    </div>
     
    <div class="card__body">
      <h3 class="card__title">${char.nombre}</h3>
      <p class="card__text">${char.descripcion}</p>
    </div>
    </a>
  `;

    scrollerPersonajes.appendChild(card);
});


// --- Generación de Tarjetas de Capítulos ---

const scrollerCapitulos = document.querySelector("#scroller-capitulos");
scrollerCapitulos.innerHTML = '';

comic.capitulos.forEach(capitulo => {
    const card = document.createElement("article");
    card.classList.add("card", "animated-card"); 

    card.innerHTML = ` <a href="./Capitulo.html?id=${capitulo.id}">
    <div class="card__thumb" style="background-image: url('${capitulo.portada}');"></div>
    <div class="card__body">
      <h3 class="card__title">${capitulo.id}. ${capitulo.nombre}</h3>
      <p class="card__text">${capitulo.descripcion}</p>
      <button class="mini">Ver capítulo</button>
    </div>
    </a>
  `;

    scrollerCapitulos.appendChild(card);
});