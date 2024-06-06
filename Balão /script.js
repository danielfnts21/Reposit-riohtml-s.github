var clicks = 0;

document.getElementById('bomba').addEventListener('click', function() {
  clicks++;
  var balao = document.getElementById('balao');
  var balaoEstourado = document.getElementById('balao-estourado');

  balao.style.transform = 'scale(1)';
  balao.style.visibility = 'visible';

  if (clicks === 4) {
    balao.style.visibility = 'hidden';
    balaoEstourado.style.visibility = 'visible';
    alert('Boom! O balão estourou após 4 cliques!');
  }
});
