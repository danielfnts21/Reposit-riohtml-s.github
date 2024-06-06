document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('smallButton');
    const message = document.getElementById('message');

    button.addEventListener('click', () => {
        message.textContent = 'Sucesso! Você clicou no botão.';
        message.style.color = 'green';
    });

    document.addEventListener('click', (event) => {
        if (event.target !== button) {
            message.textContent = 'Erro! Você clicou fora do botão.';
            message.style.color = 'red';
        }
    });
});
