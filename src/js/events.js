import { add, reset, decrease } from './counter.js';

document.getElementById("increase-btn").addEventListener("click", add);  // Botón de aumentar
document.getElementById("reset-btn").addEventListener("click", reset);   // Botón de reiniciar
document.getElementById("decrease-btn").addEventListener("click", decrease); // Botón de disminuir
