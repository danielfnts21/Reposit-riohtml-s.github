function checkPalindrome() {
    const inputWord = document.getElementById('inputWord').value;
    const result = document.getElementById('result');
    const normalizedWord = inputWord.toLowerCase().replace(/[\W_]/g, '');
    const reversedWord = normalizedWord.split('').reverse().join('');

    if (normalizedWord === reversedWord) {
        result.textContent = `"${inputWord}" é um palíndromo!`;
        result.style.color = 'green';
    } else {
        result.textContent = `"${inputWord}" não é um palíndromo.`;
        result.style.color = 'red';
    }
}
