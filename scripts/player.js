class Player {
    #symbol
    constructor(symbol) {
        this.#symbol = symbol;
    }
    getSymbol() {
        return this.#symbol;
    }
    getSymbolWinner() {
        return `url(../assets/images/${this.#symbol}_winner.png)`;
    }

    getSymbolMoving() {
        return `url(../assets/images/${this.#symbol}_moving.png)`;
    }

    getSymbolPlayer() {
        return `url(../assets/images/${this.#symbol}.png)`;
    }
}
``