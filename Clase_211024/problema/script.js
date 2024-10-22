const listaDeTareas = [];
const entrada = document.getElementById('taskInput');
const botonAgregar = document.getElementById('addButton');
const contenedorDeTareas = document.getElementById('taskListContainer');

botonAgregar.addEventListener('click', () => {
  const tarea = entrada.value;
  if (tarea) {
    listaDeTareas.push(tarea);
    actualizarListaDeTareas();
    entrada.value = '';
  }
});

function actualizarListaDeTareas() {
    contenedorDeTareas.innerHTML = '';
  
    for (let indice = 0; indice < listaDeTareas.length; indice++) {
      const tarea = listaDeTareas[indice];
      const itemDeTarea = document.createElement('li');
      itemDeTarea.textContent = tarea;
  
      const botonEliminar = document.createElement('button');
      botonEliminar.textContent = 'Eliminar';
      botonEliminar.onclick = () => {
        listaDeTareas.splice(indice, 1);
        actualizarListaDeTareas(); 
      };
  
      itemDeTarea.appendChild(botonEliminar);
      contenedorDeTareas.appendChild(itemDeTarea);
    }
    console.log(listaDeTareas);
  }