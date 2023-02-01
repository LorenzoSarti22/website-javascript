
let game = new Game(3);

function addEventListenerMouseOnOver(element, i, j) {
    element.addEventListener("mouseover",_ => {
        if (!game.isGameOver() && game.getBoard().isCellEmpty(i,j)) {
            element.style.backgroundImage = game.getCurrentPlayer().getSymbolMoving();
        }
    })
}

/**
 * Returns x raised to the n-th power.

 11

 *
 * @param {number} x The number to raise.
 * @param {number} n The power, must be a natural number.
 * @return {number} x raised to the n-th power.
 */

function addEventListenerMouseOut(element, i, j) {
    element.addEventListener("mouseout",_ => {
        if (!game.isGameOver() && game.getBoard().isCellEmpty(i,j)) {
            element.style.backgroundImage = "";
        }
    })
}

function addEventListenerMousePressed(element, i, j) {
    element.addEventListener("mousedown",_ => {
        if (!game.isGameOver() && game.getBoard().isCellEmpty(i,j)) {
            element.style.backgroundImage = game.getCurrentPlayer().getSymbolPlayer();
            game.play(i, j);
            if (game.isGameOver()){
                if (!game.getWinner()) {
                    printMessage("partita in parità");

                } else {
                    printMessage(`${game.getCurrentPlayer().getSymbol()} ha vinto`);
                }
            }
        }
    })
}
function printMessage(message) {
    let text = document.querySelector("#finish-match");
    text.textContent = message;
}

function createCell(i,j) {
    let divElement = document.createElement("div");
    divElement.classList.add("cell");
    addEventListenerMouseOnOver(divElement, i, j);
    addEventListenerMouseOut(divElement,i, j);
    addEventListenerMousePressed(divElement, i, j);
    return divElement;
}

function createMainPanel(size) {
    let panel = document.querySelector(".main-panel");
    panel.innerHTML="";
    game = new Game(size);
    for (let i = 0; i < size; i++) {  /*righe*/
        for (let j = 0; j < size; j++) {  /*colonne*/
            panel.appendChild(createCell(i,j));

        }
    }

}
function addEventListenerResetButton() {
    let reset = document.querySelector("#buttonReset");
    reset.addEventListener("mousedown", _ => {
        createMainPanel(3);
        printMessage("");

    })
}


document.addEventListener("DOMContentLoaded", ()=> {
    addEventListenerResetButton();
    createMainPanel(3);
})

