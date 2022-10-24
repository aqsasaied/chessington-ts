import Player from './player';
import GameSettings from './gameSettings';
import Square from './square';
import Piece from './pieces/piece';
import King from './pieces/king';

export default class Board {
    public currentPlayer: Player;
    private readonly board: (Piece | undefined)[][];

    public constructor(currentPlayer?: Player) {
        this.currentPlayer = currentPlayer ? currentPlayer : Player.WHITE;
        this.board = this.createBoard();
    }

    public setPiece(square: Square, piece: Piece | undefined) {
        this.board[square.row][square.col] = piece;
    }

    public getPiece(square: Square) {
        return this.board[square.row][square.col];
    }

    public findPiece(pieceToFind: Piece) {
        for (let row = 0; row < this.board.length; row++) {
            for (let col = 0; col < this.board[row].length; col++) {
                if (this.board[row][col] === pieceToFind) {
                    return Square.at(row, col);
                }
            }
        }
        throw new Error('The supplied piece is not on the board');
    }

    public movePiece(fromSquare: Square, toSquare: Square) {
        const movingPiece = this.getPiece(fromSquare);        
        if (!!movingPiece && movingPiece.player === this.currentPlayer) {
            this.setPiece(toSquare, movingPiece);
            this.setPiece(fromSquare, undefined);
            this.currentPlayer = (this.currentPlayer === Player.WHITE ? Player.BLACK : Player.WHITE);
        }
    }

    private createBoard() {
        const board = new Array(GameSettings.BOARD_SIZE);
        for (let i = 0; i < board.length; i++) {
            board[i] = new Array(GameSettings.BOARD_SIZE);
        }
        return board;
    }

    public isOnBoard(square: Square){
        if (square.row >= 0 && square.col >= 0 && square.row < GameSettings.BOARD_SIZE  && square.col < GameSettings.BOARD_SIZE ){
            return true;
        }
        else{
            return false;
        }
    }

    public isEmpty(square: Square){
        if (this.getPiece(square) == undefined){
            return true;
        }
        else{
            return false;
        }
    }

    public isTakeable(square: Square){
        if (this.getPiece(square)?.player != this.currentPlayer && !(this.getPiece(square) instanceof King)){
            return true;
        }
        else{
            return false;
        }
    }
}
