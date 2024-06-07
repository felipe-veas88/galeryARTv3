document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    var nombre = document.getElementById("nombre").value.trim();
    var email = document.getElementById("email").value.trim();
    var mensaje = document.getElementById("mensaje").value.trim();
    var tipoSolicitud = document.getElementById("tipoSolicitud").value;

    if (!nombre || !email || !mensaje || !tipoSolicitud) {
      mostrarError("Todos los campos son obligatorios.");
      event.preventDefault();
    } else {
      mostrarExito();
    }
  });

document.getElementById("mensaje").addEventListener("input", function () {
  var mensaje = this.value.toLowerCase();

  if (mensaje.includes("compra")) {
    document.getElementById("tipoSolicitud").value = "1";
  } else if (mensaje.includes("consulta")) {
    document.getElementById("tipoSolicitud").value = "2";
  } else if (mensaje.includes("venta")) {
    document.getElementById("tipoSolicitud").value = "3";
  }
});

// Función para mostrar mensaje de éxito
function mostrarExito() {
  alert("¡Formulario enviado con éxito!");
}

// Función para mostrar mensaje de error
function mostrarError(mensaje) {
  alert("Error: " + mensaje);
}
