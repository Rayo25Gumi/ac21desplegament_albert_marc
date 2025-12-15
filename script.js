const formulario = document.getElementById('formulario-tareas');
const listaTareas = document.getElementById('lista-tareas');

function agregarListenerEliminar(boton) {
    boton.addEventListener('click', function() {
        boton.parentElement.remove();
    });
}

document.querySelectorAll('#lista-tareas button').forEach(agregarListenerEliminar);

formulario.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const input = formulario.querySelector('input');
    const texto = input.value.trim();
    
    if (texto === '') return;
    
    const nuevaTarea = document.createElement('li');
    nuevaTarea.className = 'tarea';
    nuevaTarea.textContent = texto;

    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = '✖';
    nuevaTarea.appendChild(botonEliminar);

    agregarListenerEliminar(botonEliminar);
    
    listaTareas.appendChild(nuevaTarea);
    input.value = '';
});
