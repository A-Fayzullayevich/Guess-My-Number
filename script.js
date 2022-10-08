'use strict';
let number = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

const lost = () => {
  document.querySelector('.message').textContent = '❌ You lost ...';
  document.querySelector('.score').textContent = 0;
  document.querySelector('.highscore').textContent = 0;
  document.querySelector('h1').textContent = 'You Lost The Game';
};
document.querySelector('.number').textContent = '?';
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ Write number ...';
  } else if (guess === number) {
    document.querySelector('.message').textContent = '✅ Correct number ...';
    document.querySelector('.number').textContent = number;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('h1').textContent = 'You won the game!';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess > number) {
    if (score > 1) {
      document.querySelector('.message').textContent = '⬆️ Too high ...';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      lost();
    }
  } else if (guess < number) {
    if (score > 1) {
      document.querySelector('.message').textContent = '⬇️ Too low ...';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      lost();
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.message').textContent = 'Start guessing ...';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('h1').textContent = 'Guess My Number!';
});
