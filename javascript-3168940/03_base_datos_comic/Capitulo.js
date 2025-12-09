// Capitulo.js
import { comic } from "./bd.js";

document.addEventListener('DOMContentLoaded', () => { 
    // Seguridad: Si la BD falla, detenemos el script aquí.
    if (!comic || !comic.capitulos) {
        console.error("ERROR: La base de datos no está disponible.");
        return; 
    }

    const params = new URLSearchParams(window.location.search);
    const idCapitulo = parseInt(params.get('id')); 

    const miCapitulo = comic.capitulos.find(cap => cap.id === idCapitulo);

    // Redirección si ID inválido o no encontrado
    if (isNaN(idCapitulo) || !miCapitulo) {
        window.location.href = 'index.html';
        return; 
    }

    // Declaración de variables del DOM (¡debe ocurrir después de la redirección!)
    const capituloHeader = document.querySelector(".capitulo-header");
    const capituloContent = document.querySelector(".capitulo-content");

    // Renderizado del Contenido (Se ejecuta solo si el capítulo existe)
    if (miCapitulo && capituloHeader && capituloContent) { 
        
        document.title = `Capítulo ${miCapitulo.id}: ${miCapitulo.nombre}`;
        
        // 1. Estilo para el encabezado
        capituloHeader.style.backgroundImage = `url('${miCapitulo.portada}')`;
        
        // 2. Inyección del contenido
        capituloContent.innerHTML = `
            <h1 class="animated-in-page">Capítulo ${miCapitulo.id}: ${miCapitulo.nombre}</h1>
            
            <div class="capitulo-info animated-in-page">
                <p><strong>Descripción:</strong> ${miCapitulo.descripcion}</p>
                <p><strong>Personajes en este capítulo:</strong> ${miCapitulo.personajes}</p>
            </div>

            <div class="capitulo-texto animated-in-page">
                <p>${miCapitulo.descripcion}</p>
                <p>Aquí va el texto narrativo del capítulo.</p>
            </div>

            <div class="capitulo-video animated-in-page">
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
        `; // Fin innerHTML
    }
});