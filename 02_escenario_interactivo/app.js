let contadorGlobos = 0;
let contadorCorazones = 0;

const globos = document.querySelectorAll('.globo');
const corazon = document.querySelector('.corazon');

const contadorGlobosEl = document.getElementById('contadorGlobos');
const contadorCorazonesEl = document.getElementById('contadorCorazones');

//Globos: explotan con efecto "pop"
globos.forEach(globo => {
  globo.addEventListener('click', () => {
    contadorGlobos++;
    contadorGlobosEl.textContent = contadorGlobos;
    globo.classList.add('pop');
    setTimeout(() => globo.remove(), 400);
  });
});

//Corazón: sube y desaparece
corazon.addEventListener('click', () => {
  contadorCorazones++;
  contadorCorazonesEl.textContent = contadorCorazones;
  corazon.classList.add('volar');
  setTimeout(() => corazon.remove(), 1000);
});