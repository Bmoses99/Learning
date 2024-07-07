import { board, movePiece, updateBoardDisplay } from './board.js'

function isLowercasecheck(n) {
    return n === n.toLowerCase()
}

export function isValidPawnMove(startRow, startCol, endRow, endCol, board) {
    let piece = board[startRow][startCol]

    if (piece === 'p') { 
        if (endRow === startRow - 1 && endCol === startCol && board[endRow][endCol] === '') {
            return true

        } else if (endRow === startRow - 2 && endCol === startCol && 
            board[endRow][endCol] === '' && board[startRow - 1][endCol] === '') {
            return true

        } else if (endRow === startRow - 1 && Math.abs(endCol - startCol) === 1 && 
            board[endRow][endCol] !== '' && !isLowercasecheck(board[endRow][endCol])) {
            return true
        }
        return false;

    } else if (piece === 'P') {
        if (endRow === startRow + 1 && endCol === startCol && board[endRow][endCol] === '') {
            return true

        } else if (endRow === startRow + 2 && endCol === startCol && 
            board[endRow][endCol] === '' && board[startRow + 1][endCol] === '') {
            return true

        } else if (endRow === startRow + 1 && Math.abs(endCol - startCol) === 1 && 
        board[endRow][endCol] !== '' && isLowercasecheck(board[endRow][endCol])) {
            return true
        }
        return false
    }
}


export function isValidRookMove(startRow, startCol, endRow, endCol, board) {
    let piece = board[startRow][startCol]

    if (endCol === startCol && endRow !== startRow) {
        const minRow = Math.min(startRow, endRow)
        const maxRow = Math.max(startRow, endRow)

        for (let row = minRow + 1; row < maxRow; row++) {
            if (board[row][startCol] !== '') {
                return false
            }
        }
        if ((piece === 'r' && (board[endRow][endCol] === '' || !isLowercasecheck(board[endRow][endCol]))) ||
            (piece === 'R' && (board[endRow][endCol] === '' || isLowercasecheck(board[endRow][endCol])))) {
            return true
        }
    }

    if (endRow === startRow && endCol !== startCol) {
        const minCol = Math.min(startCol, endCol)
        const maxCol = Math.max(startCol, endCol)

        for (let col = minCol + 1; col < maxCol; col++) {
            if (board[startRow][col] !== '') {
                return false
            }
        }
        if ((piece === 'r' && (board[endRow][endCol] === '' || !isLowercasecheck(board[endRow][endCol]))) ||
            (piece === 'R' && (board[endRow][endCol] === '' || isLowercasecheck(board[endRow][endCol])))) {
            return true
        }
    }
    return false
}

export function isValidQueenMove(startRow, startCol, endRow, endCol, board) {
    let piece = board[startRow][startCol]

    if (endCol === startCol && endRow !== startRow) {
        const minRow = Math.min(startRow, endRow)
        const maxRow = Math.max(startRow, endRow)

        for (let row = minRow + 1; row < maxRow; row++) {
            if (board[row][startCol] !== '') {
                return false
            }
        }
        if ((piece === 'q' && (board[endRow][endCol] === '' || !isLowercasecheck(board[endRow][endCol]))) ||
            (piece === 'Q' && (board[endRow][endCol] === '' || isLowercasecheck(board[endRow][endCol])))) {
            return true
        }
    }

    if (endRow === startRow && endCol !== startCol) {
        const minCol = Math.min(startCol, endCol)
        const maxCol = Math.max(startCol, endCol)

        for (let col = minCol + 1; col < maxCol; col++) {
            if (board[startRow][col] !== '') {
                return false
            }
        }
        if ((piece === 'q' && (board[endRow][endCol] === '' || !isLowercasecheck(board[endRow][endCol]))) ||
            (piece === 'Q' && (board[endRow][endCol] === '' || isLowercasecheck(board[endRow][endCol])))) {
            return true
        }
    }

    if (Math.abs(endRow - startRow) === Math.abs(endCol - startCol)) {
        const rowStep = (endRow > startRow) ? 1 : -1
        const colStep = (endCol > startCol) ? 1 : -1

        let currentRow = startRow + rowStep
        let currentCol = startCol + colStep

        while (currentRow !== endRow && currentCol !== endCol) {
            if (board[currentRow][currentCol] !== '') {
                return false;
            }
            currentRow += rowStep
            currentCol += colStep
        }

        if ((piece === 'q' && (board[endRow][endCol] === '' || !isLowercasecheck(board[endRow][endCol]))) ||
            (piece === 'Q' && (board[endRow][endCol] === '' || isLowercasecheck(board[endRow][endCol])))) {
            return true
        }
    }
    return false
}

export function isValidBishopMove(startRow, startCol, endRow, endCol, board) {
    let piece = board[startRow][startCol]
    
    if (Math.abs(endRow - startRow) === Math.abs(endCol - startCol)) {
        const rowStep = (endRow > startRow) ? 1 : -1
        const colStep = (endCol > startCol) ? 1 : -1
    
        let currentRow = startRow + rowStep
        let currentCol = startCol + colStep
    
        while (currentRow !== endRow && currentCol !== endCol) {
            if (board[currentRow][currentCol] !== '') {
                return false
            }
            currentRow += rowStep
            currentCol += colStep
        }
    
        if (piece === 'b') {
            if (board[endRow][endCol] === '' || !isLowercasecheck(board[endRow][endCol])) {
                return true
            }
        } else if (piece === 'B') {
            if (board[endRow][endCol] === '' || isLowercasecheck(board[endRow][endCol])) {
                return true
            }
        }
    }
    return false
}

export function isValidKnightMove (startRow, startCol, endRow, endCol, board) {
    let piece = board[startRow][startCol]

        if ((endRow === (startRow + 2) && (endCol === startCol + 1)) || (endRow === (startRow - 2) && (endCol === startCol - 1)) ||
            (endRow === (startRow + 1) && (endCol === startCol + 2)) || (endRow === (startRow - 1) && (endCol === startCol - 2)) ||
            (endRow === (startRow - 2) && (endCol === startCol + 1)) || (endRow === (startRow + 2) && (endCol === startCol - 1)) ||
            (endRow === (startRow - 1) && (endCol === startCol + 2)) || (endRow === (startRow + 1) && (endCol === startCol - 2))) {

        if (piece === 'n') {
            if (board[endRow][endCol] === '' || !isLowercasecheck(board[endRow][endCol])) {
                return true;
            }
        } else if (piece === 'N') {
            if (board[endRow][endCol] === '' || isLowercasecheck(board[endRow][endCol])) {
                return true;
            }
        }
    }
    return false
}

export function isValidKingMove(startRow, startCol, endRow, endCol, board) {
    let piece = board[startRow][startCol]

    if ((endRow === startRow && endCol !== startCol) || (endRow !== startRow && endCol === startCol) || 
        (endRow === (startRow + 1) && endCol === (startCol + 1) || endRow === (startRow + 1) && endCol === (startCol - 1) ||
        endRow === (startRow - 1) && endCol === (startCol + 1) || endRow === (startRow - 1) && endCol === (startCol - 1))) {

        if (piece === 'k') {
            if (board[endRow][endCol] === '' || !isLowercasecheck(board[endRow][endCol])) {
                return true;
            }
        } else if (piece === 'K') {
            if (board[endRow][endCol] === '' || isLowercasecheck(board[endRow][endCol])) {
                return true;
            }
        }
    }
    return false
}
     

    