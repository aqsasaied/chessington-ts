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
        if (this.player == 0){
            var increment = 1
        }
        else{
            var increment = -1
        }
        availableMoves = availableMoves.concat(this.singleMove(board, [[increment,0]]));
        if (this.numMoves == 0 && availableMoves.length > 0){
            availableMoves = availableMoves.concat(this.singleMove(board, [[increment*2,0]]));
        }
        return availableMoves;
    }
}
