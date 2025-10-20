let contadorGlobos = 0;
let contadorCorazon = 0;

const globos = document.querySelectorAll('.globo');
const corazon = document.querySelector('.corazon');
const mensaje = document.getElementById('mensajeFinal');

globos.forEach(globo => {
  globo.addEventListener('click', () => {
    globo.classList.add('explotar');
    contadorGlobos++;
    document.getElementById('contadorGlobos').textContent = contadorGlobos;

    setTimeout(() => globo.style.display = 'none', 500);
    verificarVictoria();
  });
});

corazon.addEventListener('click', () => {
  corazon.classList.add('explotar');
  contadorCorazon++;
  document.getElementById('contadorCorazon').textContent = contadorCorazon;

  setTimeout(() => corazon.style.display = 'none', 500);
  verificarVictoria();
});

function verificarVictoria() {
  if (contadorGlobos === 3 && contadorCorazon === 1) {
    mensaje.style.display = 'block';
    setTimeout(() => {
      mensaje.style.display = 'none';
      reiniciarJuego();
    }, 3000);
  }
}

function reiniciarJuego() {
  contadorGlobos = 0;
  contadorCorazon = 0;
  document.getElementById('contadorGlobos').textContent = contadorGlobos;
  document.getElementById('contadorCorazon').textContent = contadorCorazon;

  globos.forEach(globo => {
    globo.style.display = 'block';
    globo.classList.remove('explotar');
  });

  corazon.style.display = 'block';
  corazon.classList.remove('explotar');
}
