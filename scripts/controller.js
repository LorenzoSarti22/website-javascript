
function createCell(i,j) {
    let divElement = document.createElement("div");
    console.log("cella " + i + "  " + j);
    divElement.classList.add("cell");
    return divElement;
}

function createMainPanel(size) {
    let panel = document.querySelector(".main-panel");
    console.log("funzioneCreateMainPanel");
    for (let i = 0; i < size; i++) {  /*righe*/
        for (let j = 0; j < size; j++) {  /*colonne*/
            panel.appendChild(createCell(i,j));
        }
    }

}




document.addEventListener("DOMContentLoaded", ()=> {
    createMainPanel(3);
})