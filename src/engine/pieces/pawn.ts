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
            availableMoves = availableMoves.concat(this.singleMove(board, [[1,0]]));
        }
        else{
            availableMoves = availableMoves.concat(this.singleMove(board, [[-1,0]]));
        }
        if (this.numMoves == 0 && availableMoves.length > 0){
            if (this.player == 0){
                availableMoves = availableMoves.concat(this.singleMove(board, [[2,0]]));
            }
            else{
                availableMoves = availableMoves.concat(this.singleMove(board, [[-2,0]]));
            }
        }
        console.log(availableMoves);
        return availableMoves;
    }
}
