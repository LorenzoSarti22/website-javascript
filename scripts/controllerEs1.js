let count = 0;

function prendiValori() {
    let nome = document.querySelector("#name").value;
    let eta = document.querySelector("#age").value;
    let tabella = document.querySelector("#tabella-info");

    /*
    tabella.rows.length (nel for)

if (nome === tabella.rows[i].cells[1].innerHTML && eta === tabella.rows[i].cells[2].innerHTML)

     */

    let riga = tabella.insertRow();
    let cellaUtente = riga.insertCell(0);
    let cellaNome = riga.insertCell(1);
    let cellaEta = riga.insertCell(2);
    count++;
    cellaUtente.innerHTML = count;
    cellaNome.innerHTML = nome;
    cellaEta.innerHTML = eta;

}