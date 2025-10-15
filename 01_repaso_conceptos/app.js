// Obtener la imagen
const imagen = document.getElementById("miImagen");

// Función: alternar blanco y negro
function aplicarBlancoNegro() {
  imagen.classList.toggle("blancoNegro");
}

// Función: alternar desenfoque
function aplicarDesenfoque() {
  imagen.classList.toggle("desenfocar");
}

// Función: alternar zoom + rotar
function aplicarZoomYRotar() {
  if (imagen.classList.contains("zoomRotar")) {
    // Si ya tiene la clase, la quitamos (vuelve a su estado original)
    imagen.classList.remove("zoomRotar");
  } else {
    // Si no la tiene, la aplicamos
    imagen.classList.add("zoomRotar");
  }
}

// EVENTOS
document.getElementById("btnBN").addEventListener("click", aplicarBlancoNegro);
document.getElementById("btnDesenfocar").addEventListener("click", aplicarDesenfoque);
document.getElementById("btnZoomRotar").addEventListener("click", aplicarZoomYRotar);
