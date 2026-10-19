import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

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


// 🚫 No eliminar las líneas de abajo ⬇️
rl.close();