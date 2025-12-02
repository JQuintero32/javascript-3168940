import { comic } from "./bd.js";

const params = new URLSearchParams(window.location.search);
let id = parseInt(params.get('id')); 

if (isNaN(id)) {
    id = 1;
}

const miPersonaje = comic.Personajes.find(p => p.id === id);

const personajePerfil = document.querySelector(".personaje-perfil");

if (miPersonaje) {
    personajePerfil.innerHTML = `
        <div class="personaje-imagen">
            <img src="${miPersonaje.imagen}" alt="Retrato de ${miPersonaje.nombre}">
        </div>
        <div class="personaje-info">
            <h1>${miPersonaje.nombre}</h1>
            <p>
                ${miPersonaje.descripcion}
            </p>
            <p>
                Detalle: Su leyenda en la historia de Helenía es una de las más grandes.
            </p>
            <button class="btn btn--primary" onclick="window.location.href='Capitulo.html?id=1'">Ver el Primer Capítulo</button>
        </div>
    `;
} else {
    personajePerfil.innerHTML = `
        `;
}