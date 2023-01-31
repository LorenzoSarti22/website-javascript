
const CROSS = "cross";
const CIRCLE = "circle";

class Game {
    #board
    #player1
    #player2
    #winner
    #currentPlayer
    #gameOver

    constructor(size) {
        this.#board = new Board(size);
        this.#player1 = new Player(CROSS);
        this.#player2 = new Player(CIRCLE);
        this.#currentPlayer = this.#player1;
        this.#gameOver = false;
    }

    getCurrentPlayer() {
        return this.#currentPlayer;
    }
    isGameOver() {
        return this.#gameOver;
    }

    resetGame() {
        this.#board.reset();
        this.#currentPlayer = this.#player1;
    }

    getBoard() {
        return this.#board;
    }

    play(i, j) {
        if (this.#board.isCellEmpty(i,j) && !this.#gameOver) {
            this.#board.makeMove(i, j, this.#currentPlayer.getSymbol());
            if (this.#board.checkWinner(i, j, this.#currentPlayer.getSymbol())) {
                this.#winner = this.#currentPlayer;
                this.#gameOver = true;
            } else {
                if (this.#currentPlayer == this.#player1) {
                    this.#currentPlayer = this.#player2;
                } else {
                    this.#currentPlayer = this.#player1;
                }
            }
        }
    }

}


/*

setCurrentPlayer(player) {
        this.#currentPlayer = player;
    }

let game = new Game(3);
let currentPlayer = game.getCurrentPlayer();
console.log(currentPlayer.getSymbol());
let player2 = new Player (CIRCLE);
game.setCurrentPlayer(player2);

currentPlayer = game.getCurrentPlayer();
console.log(currentPlayer.getSymbol());

console.log(game.getCurrentPlayer().getSymbol()); */