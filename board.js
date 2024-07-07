import { isValidPawnMove, isValidRookMove, isValidQueenMove, isValidBishopMove, isValidKnightMove, isValidKingMove } from './pieceRules.js'

export let board = [
    ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
    ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r']
];

export function initializeBoard() {
    board = [
        ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
        ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
        ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r']
    ];
}

export function movePiece(startRow, startCol, endRow, endCol) {
    let piece = board[startRow][startCol]
    let isValidMove = false

    console.log(`Attempting to move piece ${piece} from (${startRow}, ${startCol}) to (${endRow}, ${endCol})`)

    if (piece === 'p' || piece === 'P') {
        isValidMove = isValidPawnMove(startRow, startCol, endRow, endCol, board)
    } else if (piece === 'r' || piece === 'R') {
        isValidMove = isValidRookMove(startRow, startCol, endRow, endCol, board)
    } else if (piece === 'q' || piece === 'Q') {
        isValidMove = isValidQueenMove(startRow, startCol, endRow, endCol, board)
    } else if (piece === 'b' || piece === 'B') {
        isValidMove = isValidBishopMove(startRow, startCol, endRow, endCol, board)
    } else if (piece === 'n' || piece === 'N') {
        isValidMove = isValidKnightMove(startRow, startCol, endRow, endCol, board)
    } else if (piece === 'k' || piece === 'K') {
        isValidMove = isValidKingMove(startRow, startCol, endRow, endCol, board)
    }
    console.log(`Move valid: ${isValidMove}`)

    if (isValidMove) {
        board[endRow][endCol] = board[startRow][startCol]
        board[startRow][startCol] = ''
    }
    updateBoardDisplay()
}

export function updateBoardDisplay() {
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            const square = document.querySelector(`#cell-${row}-${col}`)
            square.innerHTML = getPieceHTML(board[row][col])
        }
    }
}

function getPieceHTML(piece) {
    switch (piece) {
        case 'P': return '<img src="chess images/BlackPawn.png" alt="Black Pawn">'
        case 'R': return '<img src="chess images/BlackRook.png" alt="Black Rook">'
        case 'N': return '<img src="chess images/BlackKnight.png" alt="Black Knight">'
        case 'B': return '<img src="chess images/BlackBishop.png" alt="Black Bishop">'
        case 'Q': return '<img src="chess images/BlackQueen.png" alt="Black Queen">'
        case 'K': return '<img src="chess images/BlackKing.png" alt="Black King">'
        case 'p': return '<img src="chess images/WhitePawn.png" alt="White Pawn">'
        case 'r': return '<img src="chess images/WhiteRook.png" alt="White Rook">'
        case 'n': return '<img src="chess images/WhiteKnight.png" alt="White Knight">'
        case 'b': return '<img src="chess images/WhiteBishop.png" alt="White Bishop">'
        case 'q': return '<img src="chess images/WhiteQueen.png" alt="White Queen">'
        case 'k': return '<img src="chess images/WhiteKing.png" alt="White King">'
        default: return ''
    }
}
