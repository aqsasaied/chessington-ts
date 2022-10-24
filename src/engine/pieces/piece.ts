import Player from '../player';
import Board from '../board';
import Square from '../square';

enum Direction{
    UP,
    DOWN,
    LEFT,
    RIGHT,
    UPRIGHT,
    UPLEFT,
    DOWNRIGHT,
    DOWNLEFT, 
    }

type Horizontal = 1|0|-1
type Vertical = 1|0|-1


export default class Piece {
    public player: Player;
    public numMoves: number;

    public constructor(player: Player) {
        this.player = player;
        this.numMoves = 0;
    }

    public getAvailableMoves(board: Board) {
        throw new Error('This method must be implemented, and return a list of available moves');
    }

    public moveTo(board: Board, newSquare: Square) {
        const currentSquare = board.findPiece(this);
        board.movePiece(currentSquare, newSquare);
        this.numMoves += 1;
    }

    public moveDirection(board: Board, horizontal: Horizontal, vertical: Vertical, moves: Square[], currentSquare: Square){
        var newSquare:Square;
        newSquare = Square.at(currentSquare.row + horizontal, currentSquare.col + vertical);
        if ( board.isOnBoard(newSquare)){
            if (board.isEmpty(newSquare)){
                moves.push(newSquare)
                this.moveDirection(board, horizontal, vertical, moves, newSquare)
            }
            else{
                if (board.isTakeable(newSquare)){
                    moves.push(newSquare)
                return(moves)
                }
            }
        }
        else{
            return(moves)
        }
    }

    public singleMove(board: Board, possibleMoves: Array<Array<number>>){
        var currentSquare:Square = board.findPiece(this);
        var availableMoves:Square[] = [];
        var newLocation:Square;
        for (var move of possibleMoves){
            newLocation = Square.at(currentSquare.row + move[0], currentSquare.col + move[1]);
            if (board.isOnBoard(newLocation) && board.isEmpty(newLocation)){
                availableMoves.push(newLocation);
            }
        }
        return availableMoves;
    }
}