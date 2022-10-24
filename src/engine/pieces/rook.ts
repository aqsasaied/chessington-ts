import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';
import GameSettings from '../gameSettings';


export default class Rook extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        var availableMoves:Square[] = [];
        availableMoves = availableMoves.concat(this.checkMoves(board, true, true))
        availableMoves = availableMoves.concat(this.checkMoves(board, false, true))
        availableMoves = availableMoves.concat(this.checkMoves(board, true, false))
        availableMoves = availableMoves.concat(this.checkMoves(board, false, false))
        return availableMoves;
        
    }

    public checkMoves(board: Board, positive:Boolean, horizontal:Boolean){
        var moves:Square[] = [];
        var newLocation:Square = board.findPiece(this);
        while (board.isOnBoard(newLocation)){
            if (positive){
                if (horizontal){
                    newLocation = Square.at(newLocation.row , newLocation.col + 1);
                }
                else{
                    newLocation = Square.at(newLocation.row + 1, newLocation.col);
                }
            }
            else{
                if (horizontal){
                    newLocation = Square.at(newLocation.row , newLocation.col - 1);
                }
                else{
                    newLocation = Square.at(newLocation.row - 1, newLocation.col);
                }
            }
            if (board.getPiece(newLocation) == undefined){
                moves.push(newLocation);
            }
            else{
                break;
            }
        }
        return (moves);
    }
}
