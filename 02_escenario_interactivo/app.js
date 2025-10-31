// === CONTADORES GLOBALES Y CONFIGURACIÓN ===
let contadorGlobos = 0;
let contadorCorazon = 0;
let contadorBerenjena = 0;
let contadorCopo = 0;

// Mapa para gestionar los contadores y las variables globales
const contadores = {
    contadorGlobos: 0,
    contadorCorazon: 0,
    contadorBerenjena: 0,
    contadorCopo: 0
};

// --- FUNCIÓN DE UTILIDAD DE CLIC ---
function manejarClic(elemento, contadorId, timeout = 900) { 
  if (!elemento.classList.contains("caer")) {
    elemento.classList.add("caer");
    
    // Incrementa el contador y actualiza el DOM
    contadores[contadorId]++;
    document.getElementById(contadorId).textContent = contadores[contadorId];
    
    // Remueve la clase 'caer' después del timeout
    setTimeout(() => {
        if (elemento) { 
            elemento.classList.remove("caer");
        }
    }, timeout);
  }
}

// === ASIGNACIÓN DE EVENTOS A ESCENARIOS ===

// ESCENARIO 1: Globos
document.querySelectorAll(".globo").forEach(globo => {
  globo.addEventListener("click", () => {
    manejarClic(globo, "contadorGlobos");
  });
});

// ESCENARIO 1: Corazón
const corazon = document.querySelector(".corazon");
if (corazon) {
    corazon.addEventListener("click", () => {
        manejarClic(corazon, "contadorCorazon");
    });
}

// ESCENARIO 2: Berenjenas
document.querySelectorAll(".berenjena").forEach(berenjena => {
  berenjena.addEventListener("click", () => {
    manejarClic(berenjena, "contadorBerenjena");
  });
});

// ESCENARIO 3: Copos
document.querySelectorAll(".copo").forEach(copo => {
  copo.addEventListener("click", () => {
    manejarClic(copo, "contadorCopo");
  });
});


// --- LÓGICA DEL CARRUSEL DE ESCENAS ---

const escenas = document.querySelectorAll(".escena");
const flechaIzquierda = document.querySelector(".flecha.izquierda");
const flechaDerecha = document.querySelector(".flecha.derecha");
const miniaturas = document.querySelectorAll(".miniatura");
let indice = 0;

function mostrarEscena(i) {
  // 1. Lógica circular del índice
  let nuevoIndice = i;
  if (nuevoIndice >= escenas.length) {
    nuevoIndice = 0;
  } else if (nuevoIndice < 0) {
    nuevoIndice = escenas.length - 1;
  }

  // 2. Oculta todas las escenas y desactiva las miniaturas
  escenas.forEach(escena => {
    escena.classList.remove("activa");
  });
  miniaturas.forEach(miniatura => {
    miniatura.classList.remove("activa");
  });

  // 3. Muestra la escena activa y activa la miniatura correspondiente
  escenas[nuevoIndice].classList.add('activa');
  miniaturas[nuevoIndice].classList.add('activa');

  // 4. Actualiza el índice global
  indice = nuevoIndice;
}

// Evento para la flecha derecha (avanza)
if (flechaDerecha) {
    flechaDerecha.addEventListener('click', function() {
        mostrarEscena(indice + 1);
    });
}

// Evento para la flecha izquierda (retrocede)
if (flechaIzquierda) {
    flechaIzquierda.addEventListener('click', function() {
        mostrarEscena(indice - 1);
    });
}

// Eventos para cada miniatura
miniaturas.forEach((miniatura, i) => {
  miniatura.addEventListener('click', function() {
    mostrarEscena(i);
  });
});

// Muestra la primera escena al iniciar 
document.addEventListener("DOMContentLoaded", () => {
    if (escenas.length > 0) {
        mostrarEscena(0);
    }
});