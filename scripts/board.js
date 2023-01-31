
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

    isCellEmpty (i,j) {
        let isEmpty;
        if (this.#grid[i][j] == null) {
            isEmpty = true;
        } else {
            isEmpty = false;
        }
        return isEmpty;
    }
    checkWinner (i, j, symbol) {
        return this.checkColumn(symbol, j) || this.checkDiagonalOne() || this.checkDiagonalTwo() || this.checkRow();
    }

    checkRow(symbol, i) {
        return this.#check(symbol,this.#row(i));
    }

    checkColumn(symbol, j) {
        return this.#check(symbol,this.#colum(j));
    }

    checkDiagonalOne(symbol) {
        return this.#check(symbol,this.#diagonalOne());
    }

    checkDiagonalTwo(symbol) {
        return this.#check(symbol,this.#diagonalTwo());
    }

    #colum(j) {
        return Array.from(Array(this.#size).keys()).map(i => [i, j])
    }

    #row(i) {
        return Array.from(Array(this.#size).keys()).map(j => [i, j]);
    }

    #diagonalOne() {
        return Array.from(Array(this.#size).keys()).map(i => [i,i]);
    }

    #diagonalTwo() {
        return Array.from(Array(this.#size).keys()).map(i => [i,this.#size-i-1]);
    }

    #check(symbol,array) {
        if (array.every(p => this.#grid[p[0]][p[1]]==symbol)) {
            return true;
        } else {
            return false;
        }
    }
    makeMove(i, j, symbol) {
        this.#grid[i][j] = symbol;
    }
}

