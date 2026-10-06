function calcular() {
    let x = Number(document.getElementById("x").value);
    let y = Number(document.getElementById("y").value);

    if (x > 0 && y > 0) {
        document.getElementById("resposta").innerHTML = "Q1";
    } else if (x < 0 && y > 0) {
        document.getElementById("resposta").innerHTML = "Q2";
    } else if (x < 0 && y < 0) {
        document.getElementById("resposta").innerHTML = "Q3";
    } else if (x > 0 && y < 0) {
        document.getElementById("resposta").innerHTML = "Q4";
    } else if (x == 0 && y == 0) {
        document.getElementById("resposta").innerHTML = "Origem";
    } else if (y == 0) {
        document.getElementById("resposta").innerHTML = "Eixo X";
    } else if (x == 0) {
        document.getElementById("resposta").innerHTML = "Eixo Y";
    }
}