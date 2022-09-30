import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';


export default class King extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        var possibleMoves = [[1,0],[1,1],[1,-1],[0,1],[0,-1],[-1,1],[-1,0],[-1,-1]];
        var availableMoves:Square[] = [];
        var newLocation:Square = board.findPiece(this);
        for (var move of possibleMoves){
            if (board.isOnBoard(Square.at(newLocation.row + move[0], newLocation.col + move[1]))){
                availableMoves.push(Square.at(newLocation.row + move[0], newLocation.col + move[1]))
            }
        }         
        return availableMoves;
    }
}
