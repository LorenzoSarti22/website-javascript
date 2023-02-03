
let game = new Game(3);

/**
 * stiamo regitsrando un listener su un elemento di tipo mouse over
 *
 * @param {element} x cella
 * @param {i} n indice di riga
 * @param {j} n indice di colonna
 * @return {} x
 */

function addEventListenerMouseOnOver(element, i, j) {
    element.addEventListener("mouseover",_ => {
        if (!game.isGameOver() && game.getBoard().isCellEmpty(i,j)) {
            element.style.backgroundImage = game.getCurrentPlayer().getSymbolMoving();
        }
    })
}

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

