'use strict';

/*
document.querySelerand_numberctor('.message').textContent = 'Correct number...?!';
console.log(message);
document.querySelector('.score').textContent = 13;
document.querySelector('.number').textContent = 10;
document.querySelector('.guess').value = 10;
console.log(document.querySelector('.guess').value);

document.querySelector('.guess').value = 11;
document.querySelector('.check').addEventListener('click', function () {
  document.querySelector('.number').textContent =
    document.querySelector('.guess').value;
});
*/
const message = msg => (document.querySelector('.message').textContent = msg);
let correct_number = Math.trunc(Math.random() * 20 + 1);
// let message = message;
console.log(typeof '.score');
let score = 20;
let high_score = '';

document.querySelector('.again').addEventListener('click', function () {
  correct_number = Math.trunc(Math.random() * 20 + 1);
  console.log(correct_number);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = 20;
  score = 20;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess_number = Number(document.querySelector('.guess').value);
  if (!guess_number) message('❗️❗️No Number!');
  else if (guess_number != correct_number) {
    message(guess_number > correct_number ? '👍Too High!' : '👎Too low');

    if (score > 1) {
      score -= 1;
      document.querySelector('.score').textContent = score;
      console.log(score);
    } else {
      message('🔥🔥You Lose');
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess_number == correct_number) {
    message('✨✨Correct Answer!');
    document.querySelector('.number').textContent = guess_number;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > high_score)
      document.querySelector('.highscore').textContent = score;
    high_score = score;
  }
});
