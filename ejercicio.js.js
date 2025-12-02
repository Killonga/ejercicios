// Inicialización: declaramos un array vacío
let listaDeTareas = [];

// Añadir tareas de forma interactiva
let continuar = true;

while (continuar) {
  // Pedimos al usuario que ingrese una nueva tarea
  let nuevaTarea = prompt("Ingrese una nueva tarea:");

  // Agregamos la tarea al final del array
  listaDeTareas.push(nuevaTarea);

  // Preguntamos si desea agregar otra tarea
  continuar = confirm("¿Desea agregar otra tarea?");
}

// Mostrar la lista final en consola
console.log("--- Lista de Tareas Pendientes ---");

for (let i = 0; i < listaDeTareas.length; i++) {
  console.log(`${i + 1}. ${listaDeTareas[i]}`);
}
