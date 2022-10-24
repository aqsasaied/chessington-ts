import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';

export default class Queen extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        var availableMoves:Square[] = [];
        this.moveDirection(board, 0, availableMoves, board.findPiece(this))
        this.moveDirection(board, 1, availableMoves, board.findPiece(this))
        this.moveDirection(board, 2, availableMoves, board.findPiece(this))
        this.moveDirection(board, 3, availableMoves, board.findPiece(this))
        this.moveDirection(board, 4, availableMoves, board.findPiece(this))
        this.moveDirection(board, 5, availableMoves, board.findPiece(this))
        this.moveDirection(board, 6, availableMoves, board.findPiece(this))
        this.moveDirection(board, 7, availableMoves, board.findPiece(this))
        return availableMoves;

    }

}
