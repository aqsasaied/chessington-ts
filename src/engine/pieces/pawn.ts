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
        var newLocation:Square = board.findPiece(this);
        if (this.numMoves == 0){
            if (this.player == 0){
                newLocation.row += 2;
            }
            else{
                newLocation.row -= 2;
            }
            availableMoves.push(newLocation);
            newLocation = board.findPiece(this);
        }
        if (this.player == 0){
            newLocation.row += 1;
        }
        else{
            newLocation.row -= 1;
        }
        availableMoves.push(newLocation);
        return availableMoves;
    }
}
