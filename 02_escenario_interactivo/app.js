// === ESCENARIO 1 ===
let contadorGlobos = 0;
let contadorCorazon = 0;

document.querySelectorAll(".globo").forEach(globo => {
  globo.addEventListener("click", () => {
    if (!globo.classList.contains("caer")) {
      globo.classList.add("caer");
      contadorGlobos++;
      document.getElementById("contadorGlobos").textContent = contadorGlobos;
      setTimeout(() => globo.classList.remove("caer"), 5000);
    }
  });
});

const corazon = document.querySelector(".corazon");
corazon.addEventListener("click", () => {
  if (!corazon.classList.contains("caer")) {
    corazon.classList.add("caer");
    contadorCorazon++;
    document.getElementById("contadorCorazon").textContent = contadorCorazon;
    setTimeout(() => corazon.classList.remove("caer"), 5000);
  }
});

/* // === ESCENARIO 2 ===
let contadorBerenjena = 0;
document.querySelectorAll(".berenjena").forEach(berenjena => {
  berenjena.addEventListener("click", () => {
    if (!berenjena.classList.contains("caer")) {
      berenjena.classList.add("caer");
      contadorBerenjena++;
      document.getElementById("contadorBerenjena").textContent = contadorBerenjena;
      setTimeout(() => berenjena.classList.remove("caer"), 5000);
    }
  });
});

// === ESCENARIO 3 ===
let contadorCopo = 0;
document.querySelectorAll(".copo").forEach(copo => {
  copo.addEventListener("click", () => {
    if (!copo.classList.contains("caer")) {
      copo.classList.add("caer");
      contadorCopo++;
      document.getElementById("contadorCopo").textContent = contadorCopo;
      setTimeout(() => copo.classList.remove("caer"), 5000);
    }
  });
}); */


const escena = document.querySelectorAll(".escena")
const flechaizquierda = document.querySelector(".flecha.izquierda")
const flechaderecha = document.querySelector(".flecha.derecha")
const miniaturas = document.querySelector(".miniatura")
let indice = 0 

console.log(escena)
console.log(flechaizquierda)
console.log(flechaderecha)
console.log(miniaturas)

function mostrarEscena(i){

  for (let j = 0; j < escena.length; j++) {
  escenas [j].classListadd.remove("escena");
    
  }
  escenas [i].classList.add ('activa');

  indice= i;
};

flecha.derecha.addEventListener('click', function(){
  indice = indice -1
  if (indice > 0) {
    indice =escena.length -1;
  }
  mostrarEscena(indice);
});
flecha.izquierda.addEventListener('click', function(){
  indice = indice +1
  if (indice < 0) {
    indice = escena.length -1;
  }
  mostrarEscena(indice);
});