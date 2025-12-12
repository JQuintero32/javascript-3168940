// Personaje.js

import { comic } from "./bd.js";

const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get('id')); 

const miPersonaje = comic.Personajes.find(p => p.id === id);

// REDIRECCIÓN SI EL ID ES INVÁLIDO O EL PERSONAJE NO EXISTE (Seguridad)
// Solo redirigimos, no usamos 'return' para evitar el error de sintaxis.
if (isNaN(id) || !miPersonaje) {
    
    window.location.href = 'index.html';
    // Se eliminó el 'return;' que causaba el 'Illegal return statement'
}

const personajePerfil = document.querySelector(".personaje-perfil");

// El código para mostrar el personaje se ejecuta SOLO si miPersonaje existe
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
}