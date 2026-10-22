import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';


const rl = readline.createInterface({ input, output });
// 🚫 No eliminar las líneas de arriba ⬆️

// ✍️ Escribe tu código aquí 👇
interface Task {
    id: number;
    title: string;
    completed: boolean;
}


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const hacerPregunta = (pregunta: string): Promise<string> => {
    return new Promise((resolve) => rl.question(pregunta, resolve));
};


let systemName: string = "funval";
let version: number = 2;
let userName: string = "Sara"; 

console.log("--------------------------------------------------");
console.log("Bienvenido, al sistema" + " " + userName + "!");
console.log("sistema: " + " " + systemName);
console.log("version actual: v" + version);
console.log("---------------------------------------------------");

let listaTareas: Task[] = [];
let idCounter: number = 1;


const addTask = (title: string) => {
    let objetoTarea: Task = {
        id: idCounter,
        title: title,
        completed: false 
    };
    listaTareas.push(objetoTarea);
    console.log(`¡Tarea "${objetoTarea.title}" agregada con éxito! (ID asignado: ${objetoTarea.id})`);
    idCounter++;
};


const listTasks = () => {
    console.log('\n=== LISTA DE TAREAS ===');
    if (listaTareas.length === 0) {
        console.log('No hay tareas registradas aun.');
        return;
    }
    const tareasFormateadas: string[] = listaTareas.map((task) => {
    const status = task.completed ? 'completed' : 'pending';
    return `[${task.id}] ${task.title} - ${status}`;
  });

tareasFormateadas.forEach((textoTarea) => {
    console.log(textoTarea);
    
    
    });
};


const removeTask = () => {
    console.log('\n=== ELIMINAR TAREA ===');
    if (listaTareas.length === 0) {
        console.log('No hay tareas para eliminar.');
        return;
    }

    const tareaEliminada = listaTareas.pop(); 
    
    if (tareaEliminada) {
        console.log(`Tarea "${tareaEliminada.title}" eliminada.`);
    }
};
const markCompleted = (id: number): void => {
const tarea = listaTareas.find((t) => t.id === id);
 if (tarea) {
    tarea.completed = true; 
 console.log(`\n¡Tarea "[${tarea.id}] ${tarea.title}" marcada como completada!`);
  } else {
    console.log(`\nNo se encontró ninguna tarea con el ID: ${id}`);
  }
};   
const filterPending = (): Task[] => {
  return listaTareas.filter((tarea) => tarea.completed === false);
};

const filterCompleted = (): Task[] => {
  return listaTareas.filter((tarea) => tarea.completed === true);
};      
async function iniciarMenu(): Promise<void> {
    let salir: boolean = false;

    while (!salir) {
        console.log('\n--- GESTOR DE TAREAS ---');
        console.log('1. Agregar una tarea');
        console.log('2. Ver todas las tareas');
        console.log('3. Eliminar última tarea');
        console.log('4. Marcar tarea como completada'); 
        console.log('5. Ver tareas pendientes');        
        console.log('6. Ver tareas completadas'); 
        console.log('7. Salir');
        
        const opcion = await hacerPregunta('Selecciona una opción: ');

        switch (opcion.trim()) {
            case '1':
                const nuevaTarea = await hacerPregunta('\nEscribe el título de la tarea: ');
                if (nuevaTarea.trim() !== '') {
                    addTask(nuevaTarea.trim()); 
                } else {
                    console.log('No puedes agregar una tarea vacía.');
                }
                break;

            case '2':
                listTasks();
                break;

            case '3':
                removeTask();
                break;

            case '4':
        const idInput = await hacerPregunta('\nEscribe el ID de la tarea a completar: ');
        const idNumero = Number(idInput);
        markCompleted(idNumero);
        break;
      case '5':
        console.log('\n=== TAREAS PENDIENTES ===');
        filterPending().forEach(t => console.log(`[${t.id}] ${t.title}`));
        break;
      case '6':
        console.log('\n=== TAREAS COMPLETADAS ===');
        filterCompleted().forEach(t => console.log(`[${t.id}] ${t.title}`));
        break;
      case '7':
        console.log('\nSaliendo del programa... ¡Hasta luego!');
        salir = true;
        break;
      default:
        console.log('\nOpción no válida. Por favor, intenta de nuevo.');
        break;
        }
    }

    rl.close();
}


iniciarMenu();




// 🚫 No eliminar las líneas de abajo ⬇️

 rl.close();
 //se utilizo la ayuda de la IA para entender todo el proceso
 // aun me es dificil entender todo o procesar toda la informacion
 //sigo estudiando para poder recordarlo todo.

