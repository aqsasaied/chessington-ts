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
        var newLocation:Square = board.findPiece(this);
        newLocation = Square.at(newLocation.row + 1, newLocation.col);
        while (newLocation.row < GameSettings.BOARD_SIZE){
            if (board.getPiece(newLocation) == undefined){
                availableMoves.push(newLocation);
            }
            else{
                break
            }
            newLocation = Square.at(newLocation.row + 1, newLocation.col);
        }
        newLocation = board.findPiece(this);
        newLocation = Square.at(newLocation.row - 1, newLocation.col);
        while (newLocation.row >= 0 ){
            if (board.getPiece(newLocation) == undefined){
                availableMoves.push(newLocation);
            }
            else{
                break
            }
            newLocation = Square.at(newLocation.row - 1, newLocation.col);
        }
        newLocation = board.findPiece(this);
        newLocation = Square.at(newLocation.row, newLocation.col + 1);
        while (newLocation.col < GameSettings.BOARD_SIZE){
            if (board.getPiece(newLocation) == undefined){
                availableMoves.push(newLocation);
            }
            else{
                break
            }
            newLocation = Square.at(newLocation.row, newLocation.col + 1);
        }
        newLocation = board.findPiece(this);
        newLocation = Square.at(newLocation.row, newLocation.col - 1);
        while (newLocation.col >= 0){
            if (board.getPiece(newLocation) == undefined){
                availableMoves.push(newLocation);
            }
            else{
                break
            }
            newLocation = Square.at(newLocation.row, newLocation.col - 1);
        }
        return availableMoves;
        
    }
}
