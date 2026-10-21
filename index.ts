import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';
// en esta linea hay un error, despues de varias pruebas aun persiste
//el texto esta tal cual en moodle

const rl = readline.createInterface({ input, output });
// 🚫 No eliminar las líneas de arriba ⬆️

// ✍️ Escribe tu código aquí 👇

let systemName: string = "funval"
let version: number = 1
let userName: string = "Sara" 
console.log("--------------------------------------------------");
console.log("Bienvenido, al sistema" + " " + userName + "!")
console.log("sistema: " + " " + systemName)
console.log("version actual: v" + version)
console.log("---------------------------------------------------")

let titulosTareas: string[] = [];
async function iniciarMenu(): Promise<void> {
    let salir: boolean = false;

    while (!salir) {
        console.log('\n--- GESTOR DE TAREAS ---');
        console.log('1. Agregar una tarea');
        console.log('2. Ver todas las tareas');
        console.log('3. Salir');
        
        const opcion = await hacerPregunta('Selecciona una tarea: ');

        switch (opcion.trim()) {
            case '1':
                const nuevaTarea = await hacerPregunta('\nEscribe el título de la tarea: ');
                if (nuevaTarea.trim() !== '') {
                    titulosTareas.push(nuevaTarea.trim()); 
                    console.log(`¡Tarea "${nuevaTarea}" agregada con éxito!`);
                } else {
                    console.log('No puedes agregar una tarea vacía.');
                }
                break;

            case '2':
                console.log('\n=== LISTA DE TAREAS ===');
                if (titulosTareas.length === 0) {
                    console.log('No hay tareas registradas aún.');
                } else {
                    titulosTareas.forEach((tarea, indice) => {
                        console.log(`${indice + 1}. ${tarea}`);
                    });
                }
                break;

            case '3':
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




// 🚫 No eliminar las líneas de abajo ⬇️
rl.close();

