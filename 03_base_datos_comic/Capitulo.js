import { comic } from "./bd.js";

const params = new URLSearchParams(window.location.search);
let idCapitulo = parseInt(params.get('id')); 

// Corrección: Si el ID de la URL es inválido o falta (NaN), forzamos el uso del Capítulo 1
if (isNaN(idCapitulo)) {
    idCapitulo = 1;
}

const miCapitulo = comic.capitulos.find(cap => cap.id === idCapitulo);

const capituloHeader = document.querySelector(".capitulo-header");
const capituloContent = document.querySelector(".capitulo-content");
const tituloPagina = document.querySelector("title");

if (miCapitulo) {
    tituloPagina.textContent = `Capítulo ${miCapitulo.id}: ${miCapitulo.nombre}`;
    
    capituloHeader.style.backgroundImage = `url('${miCapitulo.portada}')`;
    
    capituloContent.innerHTML = `
        <h1>Capítulo ${miCapitulo.id}: ${miCapitulo.nombre}</h1>
        
        <div class="capitulo-info">
            <p><strong>Descripción:</strong> ${miCapitulo.descripcion}</p>
            <p><strong>Personajes en este capítulo:</strong> ${miCapitulo.personajes}</p>
        </div>

        <div class="capitulo-texto">
            <p>${miCapitulo.descripcion}</p>
            <p>
                Este es el texto de ejemplo detallado para el Capítulo ${miCapitulo.id}. 
                Aquí iría la narración completa que tu profesor les pida programar después.
            </p>
        </div>

        <div class="capitulo-video">
            <video controls>
                <source src="castillo.mp4" type="video/mp4">
            </video>
        </div>
        
        ${idCapitulo < comic.capitulos.length 
            ? `<button class="btn btn--primary" onclick="window.location.href='Capitulo.html?id=${idCapitulo + 1}'">
                Continuar la lectura (Capítulo ${idCapitulo + 1})
               </button>`
            : `<button class="btn btn--secondary" disabled>Fin del Cómic</button>`
        }
    `;

} else {
    capituloContent.innerHTML = `
       `;
    capituloHeader.style.backgroundImage = 'none'; 
}