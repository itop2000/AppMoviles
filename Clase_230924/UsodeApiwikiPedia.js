// Función asincrónica para buscar resultados en la API de Wikipedia
async function buscarObtenerResultados(termino) {
    // Construir la URL de la solicitud
    const url = `https://es.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srsearch=${termino}`;
    
    // Realizar la solicitud fetch a la API de Wikipedia
    const respuesta = await fetch(url);
    
    // Convertir la respuesta a formato JSON
    const datos = await respuesta.json();
    
    // Manejar los resultados (aquí puedes agregar tu lógica)
    console.log(datos);
}

// Ejemplo de uso de la función
buscarObtenerResultados('Programación');
// Verificar si hay resultados de búsqueda
if (resultados.length > 0) {
    // Crear elementos y contenido de texto basado en los resultados
    resultados.forEach(resultado => {
        const elemento = document.createElement('div');
        elemento.textContent = resultado.titulo;
        document.body.appendChild(elemento);
    });
} else {
    // Mostrar mensaje si no se encontraron resultados
    const mensaje = document.createElement('p');
    mensaje.textContent = 'No se encontraron elementos.';
    document.body.appendChild(mensaje);
}

// Manejo de errores
try {
    // Código que puede lanzar un error
} catch (error) {
    // Mostrar mensaje de error
    const mensajeError = document.createElement('p');
    mensajeError.textContent = 'Ocurrió un error.';
    document.body.appendChild(mensajeError);
}
