document.getElementById('submitButton').addEventListener('click', function() {
    const matrixInput = document.getElementById('matrixInput').value.trim();
    const lineNumber = parseInt(document.getElementById('lineNumber').value);

    if (matrixInput === '' || isNaN(lineNumber)) {
        alert('Por favor, preencha todos os campos corretamente.');
        return;
    }

    const matrix = matrixInput.split('\n').map(row => row.split(',').map(Number));

    if (lineNumber < 0 || lineNumber >= matrix.length) {
        alert('Número da linha inválido.');
        return;
    }

    matrix[lineNumber] = new Array(matrix[0].length).fill(0);

    displayMatrix(matrix);
});

function displayMatrix(matrix) {
    const resultContainer = document.getElementById('resultContainer');
    resultContainer.innerHTML = '';

    const table = document.createElement('table');
    table.style.width = '100%';
    table.style.borderCollapse = 'collapse';

    matrix.forEach(row => {
        const tr = document.createElement('tr');
        row.forEach(cell => {
            const td = document.createElement('td');
            td.textContent = cell;
            td.style.border = '1px solid #ddd';
            td.style.padding = '8px';
            td.style.textAlign = 'center';
            tr.appendChild(td);
        });
        table.appendChild(tr);
    });

    resultContainer.appendChild(table);
}
