import { initializeBoard, updateBoardDisplay } from './board.js';
import { addEventListeners } from './eventlisteners.js';

console.log("Loading successful.")

document.addEventListener('DOMContentLoaded', (event) => {
    initializeBoard()
    addEventListeners()
    updateBoardDisplay()
})