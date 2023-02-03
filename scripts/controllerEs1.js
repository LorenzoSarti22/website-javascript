let count = 0;
const colors = ["red", "green", "blue"];
let c = 1;

function prendiValori() {
    let duplicati = false;
    let nome = document.querySelector("#name").value;
    let eta = document.querySelector("#age").value;
    let tabella = document.querySelector("#tabella-info");
    for (let i = 0; i<tabella.rows.length; i++) {
        if (nome === tabella.rows[i].cells[1].innerHTML && eta === tabella.rows[i].cells[2].innerHTML) {
            duplicati = true;
        }
    }
    if (!duplicati) {
        let riga = tabella.insertRow();
        let cellaUtente = riga.insertCell(0);
        let cellaNome = riga.insertCell(1);
        let cellaEta = riga.insertCell(2);
        count++;
        cellaUtente.innerHTML = count;
        cellaNome.innerHTML = nome;
        cellaEta.innerHTML = eta;
    } else {
        alert("Nome non disponibile; Cambiare nome");
    }
}


function changeColor() {
    if (c==3) {
        c=0;
    }
   document.querySelector("#color-body").style.backgroundColor = colors[c];
    c++;
}


