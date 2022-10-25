import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';

export default class Pawn extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        var availableMoves:Square[] = [];
        const increment = this.player === Player.WHITE ? 1 : -1;
        availableMoves = availableMoves.concat(this.singleMove(board, [[increment,0]]));
        if (this.numMoves == 0 && availableMoves.length > 0){
            availableMoves = availableMoves.concat(this.singleMove(board, [[increment*2,0]]));
        }
        var currentSquare = board.findPiece(this);
        var d1 = Square.at(currentSquare.row + increment, currentSquare.col + 1);
        var d2 = Square.at(currentSquare.row + increment, currentSquare.col - 1);
        if (board.isOnBoard(d1) && !board.isEmpty(d1) && board.isTakeable(d1)){
            availableMoves.push(d1);
        }
        if (board.isOnBoard(d2) && !board.isEmpty(d2) && board.isTakeable(d2)){
            availableMoves.push(d2);
        }
        console.log(availableMoves);
        return availableMoves;
    }

}
