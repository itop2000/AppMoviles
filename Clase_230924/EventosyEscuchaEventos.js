// Obtener el botón del DOM por su ID
const boton = document.getElementById("cambiarColor");

// Añadir un event listener para el evento 'click'
boton.addEventListener("click", function() {
    // Generar un color aleatorio
    const colorAleatorio = '#' + Math.floor(Math.random()*16777215).toString(16);
    // Cambiar el color de fondo del cuerpo del documento
    document.body.style.backgroundColor = colorAleatorio;
});
