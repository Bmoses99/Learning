import { board, movePiece, updateBoardDisplay } from './board.js';

let selectedPiece = null
let selectedCell = null

export function addEventListeners() {
    const boardsquares = document.querySelectorAll('td');

    boardsquares.forEach(square => {
        square.addEventListener('click', () => {
            let cellid = square.id.split('-')
            const [row, col] = cellid.slice(1).map(Number)

            if (selectedPiece) {
                if (selectedPiece.row !== row || selectedPiece.col !== col) {
                    movePiece(selectedPiece.row, selectedPiece.col, row, col)
                    selectedPiece = null
                    selectedCell.classList.remove('selected')
                    selectedCell = null
                    updateBoardDisplay()

                } else {
                    selectedPiece = null
                    selectedCell.classList.remove('selected')
                    selectedCell = null
                }

            } else {
                if (board[row][col] !== '') {
                    selectedPiece = { row, col }
                    selectedCell = square
                    square.classList.add('selected')
                }
            }
        })
    })
}