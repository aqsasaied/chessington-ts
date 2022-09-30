import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';
import GameSettings from '../gameSettings';


export default class Bishop extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        var availableMoves:Square[] = [];
        availableMoves = availableMoves.concat(this.checkMoves(board, true, true))
        availableMoves = availableMoves.concat(this.checkMoves(board, false, true))
        availableMoves = availableMoves.concat(this.checkMoves(board, true, false))
        availableMoves = availableMoves.concat(this.checkMoves(board, false, false))
        console.log(availableMoves);
        return availableMoves;

    }

    public checkMoves(board: Board, up:Boolean, right:Boolean){
        var moves:Square[] = [];
        var newLocation:Square = board.findPiece(this);
        var end:number
        while (newLocation.row > 0 && newLocation.col > 0 && newLocation.row < GameSettings.BOARD_SIZE - 1 && newLocation.col < GameSettings.BOARD_SIZE - 1){
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
