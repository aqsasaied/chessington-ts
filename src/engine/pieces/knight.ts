import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';


export default class Knight extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        var possibleMoves = [[1,2],[1,-2],[-1,2],[-1,-2],[2,1],[-2,1],[-2,-1],[2,-1]];      
        return this.singleMove(board, possibleMoves);
    }
}
