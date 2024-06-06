function substituirLinhaPorZeros() {
    const numeroLinha = parseInt(document.getElementById("linha").value);
    const matriz = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];

    if (numeroLinha >= 0 && numeroLinha < matriz.length) {
        matriz[numeroLinha] = new Array(matriz[numeroLinha].length).fill(0);
        exibirMatriz(matriz);
    } else {
        console.error("Número de linha inválido!");
    }
}

function exibirMatriz(matriz) {
    const table = document.getElementById("matrixTable");
    table.innerHTML = "";

    matriz.forEach(row => {
        const tr = document.createElement("tr");
        row.forEach(cell => {
            const td = document.createElement("td");
            td.textContent = cell;
            tr.appendChild(td);
        });
        table.appendChild(tr);
    });
}


document.addEventListener("DOMContentLoaded", function() {
    exibirMatriz([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ]);
});
