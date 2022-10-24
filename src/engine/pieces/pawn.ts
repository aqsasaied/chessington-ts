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
        if (this.player == 0){
            newLocation = Square.at(newLocation.row += 1, newLocation.col);
        }
        else{
            newLocation = Square.at(newLocation.row -= 1, newLocation.col);
        }
        if (board.isEmpty(newLocation)){
            availableMoves.push(newLocation);
        }
        else{
            return availableMoves;
        }
        newLocation = board.findPiece(this);
        if (this.numMoves == 0){
            if (this.player == 0){
                newLocation = Square.at(newLocation.row += 2, newLocation.col);
            }
            else{
                newLocation = Square.at(newLocation.row -= 2, newLocation.col);
            }
            if (board.isEmpty(newLocation)){
                availableMoves.push(newLocation);
            }   
        }
        return availableMoves;
    }
}
