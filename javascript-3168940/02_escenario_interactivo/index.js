// 1. Captura de variables
let contadorGlobos = 0;
let contadorCorazon = 0;

const globos = document.querySelectorAll('.globo');
const corazon = document.querySelector('.corazon');
const tablero = document.getElementById('contadorGlobos'); 

// 2. Funciones
globos.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.add("saltar"); 
    
    contadorGlobos++; 
    tablero.textContent = contadorGlobos; 

   
    setTimeout(() => item.style.display = "none", 1000);
  });
});

// 3. Evento del corazón
corazon.addEventListener('click', () => {
  corazon.classList.add("latir"); 
  contadorCorazon++;
  console.log("Corazones:", contadorCorazon);
});

