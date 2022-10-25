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
        var diagonals = [[increment,1], [increment,-1]];
        for (var move of diagonals){
            if (this.takeDiagonal(board, Square.at(currentSquare.row + move[0], currentSquare.col + move[1]))){
                availableMoves.push(Square.at(currentSquare.row + move[0], currentSquare.col + move[1]));
            }
        }
        console.log(availableMoves);
        return availableMoves;
    }

    public takeDiagonal(board: Board, square : Square){
        if (board.isOnBoard(square) && !board.isEmpty(square) && board.isTakeable(square)){
            return true;
        }
        return false;
    }
}
