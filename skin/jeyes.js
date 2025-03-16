let flippedCards = 0;

function flipCard(card) {
  const cardInner = card.querySelector('.card-inner');
  if (!cardInner.classList.contains('flipped')) {
    cardInner.classList.add('flipped');
    flippedCards++;

    // Check if all cards are flipped
    if (flippedCards === 6) {
      document.getElementById('more-button').style.display = 'block';
    }
  }
}

document.getElementById('more-button').addEventListener('click', () => {
  const paper = document.getElementById('message-paper');
  paper.style.display = 'block';
});

document.getElementById('close-button').addEventListener('click', () => {
  // Trigger disappearance of everything
  document.querySelector('.birthday-market').style.display = 'none';

  // Display "Enjoy Your Day!" text in the center
  const body = document.body;
  body.innerHTML = `<h1 id="final-message">Enjoy Your Day!</h1>`;

  // Add confetti right after
  startConfetti();
});

function startConfetti() {
  const confettiContainer = document.createElement('div');
  confettiContainer.classList.add('confetti-container');
  document.body.appendChild(confettiContainer);

  for (let i = 0; i < 150; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
    confetti.style.animationDuration = Math.random() * 3 + 2 + 's'; // Random fall speed
    confetti.style.backgroundColor = getRandomColor(); // Random colors
    confettiContainer.appendChild(confetti);
  }

  // Remove confetti container after animation ends
  setTimeout(() => {
    confettiContainer.remove();
  }, 3000); // Confetti lasts for 3 seconds
}

function getRandomColor() {
  const colors = ['#FF4655', '#FFD700', '#00E8E0', '#ADFF2F', '#FFA500']; // Valorant palette
  return colors[Math.floor(Math.random() * colors.length)];
}
