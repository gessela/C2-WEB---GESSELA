//let colors = [];
// const colorElements = document.querySelectorAll("#colornamestable tbody tr td:first-child");

// for (let element of colorElements) {
//   let colorName = element.innerText.trim();
//   if (colorName) {
//     colors.push(colorName);
//   }
// }

// como não é possivel acessar o DOM de outra página / fazer scraping, vamos usar um array de cores pré-definido

const colors = [
  "white", "Black","Blue", "Brown", "Coral", "Gray", "Grey", "Green", "Magenta", "Maroon", "Orange", "Pink", "Purple", "Red", "Violet", "White","Yellow"
];


let selectedColor = colors[Math.floor(Math.random() * colors.length)];
let attempts = 3;

document.getElementById('guessButton').addEventListener('click', function () {
  let userGuess = document.getElementById('colorInput').value;
  if (userGuess === selectedColor) {
    document.getElementById('congratsMessage').style.display = 'block';
    document.getElementById('congratsMessage').textContent = 'Parabéns! A cor era ' + selectedColor;
    document.getElementById('restartButton').style.display = 'block';
  } else {
    attempts--;
    updateHearts();
    if (attempts <= 0) {
      alert('Game Over! A cor correta era ' + selectedColor);
      document.getElementById('restartButton').style.display = 'block';
    }
  }
});

document.getElementById('restartButton').addEventListener('click', function () {
  window.location.reload();
});

function updateHearts() {
  let hearts = document.getElementById('hearts').children;
  for (let i = 0; i < hearts.length; i++) {
    if (i >= attempts) {
      hearts[i].style.display = 'none';
    }
  }
}

document.getElementById('hintButton').addEventListener('mouseenter', function () {
  let hintContent = '';
  for (let i = 0; i < colors.length; i += 2) {
    hintContent += colors[i];
    if (i + 1 < colors.length) {
      hintContent += ', ' + colors[i + 1];
    }
    hintContent += '<br>'; // Quebra de linha após cada par de cores
  }

  const hintBox = document.getElementById('hintBox');
  hintBox.innerHTML = hintContent; // Usar innerHTML para interpretar as tags HTML
  hintBox.style.display = 'block';

  setTimeout(function () {
    hintBox.style.display = 'none';
  }, 3000); // Mantém a caixa visível por 3 segundos
});

