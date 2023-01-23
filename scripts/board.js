
class Board {
    #size
    #grid

    constructor(size) {
        this.#size = size;
        this.#grid = Array(size).fill(null).map(_ => Array(size).fill(null));
    }

    reset() {
        this.#grid = Array(size).fill(null).map(_ => Array(size).fill(null));
    }
}

