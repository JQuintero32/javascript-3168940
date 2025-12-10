
// Personaje.js

import { comic } from "./bd.js";

const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get('id')); 

const miPersonaje = comic.Personajes.find(p => p.id === id);

if (isNaN(id) || !miPersonaje) {
    
    window.location.href = 'index.html';
    // ¡LA CLAVE ES REMOVER EL 'return;' DE AQUÍ!
}

// ... (El resto del código es correcto) ...

const personajePerfil = document.querySelector(".personaje-perfil");

// 3. El resto del código es correcto y se ejecuta SOLO si miPersonaje existe
if (miPersonaje) {
    // El código para mostrar el personaje es correcto.
    // ... (Tu código de innerHTML es correcto) ...
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
    // Este bloque ahora es innecesario porque la redirección maneja los casos fallidos.
    personajePerfil.innerHTML = ``;
}