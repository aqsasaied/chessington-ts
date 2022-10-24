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
        availableMoves = availableMoves.concat(this.checkMoves(board,true, true, true))
        availableMoves = availableMoves.concat(this.checkMoves(board,true, false, true))
        availableMoves = availableMoves.concat(this.checkMoves(board,true, true, false))
        availableMoves = availableMoves.concat(this.checkMoves(board,true, false, false))
        availableMoves = availableMoves.concat(this.checkMoves(board,false, true, true))
        availableMoves = availableMoves.concat(this.checkMoves(board,false, false, true))
        availableMoves = availableMoves.concat(this.checkMoves(board,false, true, false))
        availableMoves = availableMoves.concat(this.checkMoves(board,false, false, false))
        return availableMoves;

    }

    public checkMoves(board: Board, diagonal:Boolean, up:Boolean, right:Boolean){
        var moves:Square[] = [];
        var newLocation:Square = board.findPiece(this);
        while (board.isOnBoard(newLocation)){
            if (diagonal){
                if (up){
                    if (right){
                        newLocation = Square.at(newLocation.row + 1, newLocation.col + 1);
                    }
                    else{
                        newLocation = Square.at(newLocation.row + 1, newLocation.col - 1);
                    }
                }
                else{
                    if (right){
                        newLocation = Square.at(newLocation.row - 1, newLocation.col + 1);
                    }
                    else{
                        newLocation = Square.at(newLocation.row - 1, newLocation.col - 1);
                    }
                }
                if (!board.isOnBoard(newLocation)){
                    break
                }
                if (board.getPiece(newLocation) == undefined){
                    moves.push(newLocation);
                }
                else{
                    break;
                }
            }
            else{
                if (up){
                    if (right){
                        newLocation = Square.at(newLocation.row , newLocation.col + 1);
                    }
                    else{
                        newLocation = Square.at(newLocation.row + 1, newLocation.col);
                    }
                }
                else{
                    if (right){
                        newLocation = Square.at(newLocation.row , newLocation.col - 1);
                    }
                    else{
                        newLocation = Square.at(newLocation.row - 1, newLocation.col);
                    }
                }
                if (!board.isOnBoard(newLocation)){
                    break
                }
                if (board.getPiece(newLocation) == undefined){
                    moves.push(newLocation);
                }
                else{
                    break;
                }
            }
        }
        return (moves);
    }
}
