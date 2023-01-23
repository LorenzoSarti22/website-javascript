
const CROSS = "cross";
const CIRCLE = "circle";

class Game {
    #board
    #player1
    #player2
    #winner
    #currentPlayer

    constructor(size) {
        this.#board = new Board(size);
        this.#player1 = new Player(CROSS);
        this.#player2 = new Player(CIRCLE);
        this.#currentPlayer = this.#player1;
    }

    getCurrentPlayer() {
        return this.#currentPlayer;
    }
    resetGame() {
        this.#board.reset();
        this.#currentPlayer = this.#player1;
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