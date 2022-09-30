import Player from '../player';
import Board from '../board';
import Square from '../square';

export default class Piece {
    public player: Player;
    public numMoves: number;

    public constructor(player: Player) {
        this.player = player;
        this.numMoves = 0;
    }

    public getAvailableMoves(board: Board) {
        throw new Error('This method must be implemented, and return a list of available moves');
    }

    public moveTo(board: Board, newSquare: Square) {
        const currentSquare = board.findPiece(this);
        board.movePiece(currentSquare, newSquare);
        this.numMoves += 1;
    }
}
