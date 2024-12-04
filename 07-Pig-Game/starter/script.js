'use strict';

const score01 = document.querySelector('#score--0');
const score02 = document.querySelector('#score--1');
const dice = document.querySelector('.dice');
const new_btn = document.querySelector('.btn--new');
const roll_btn = document.querySelector('.btn--roll');
const hold_btn = document.querySelector('.btn--hold');
const win_btn = document.querySelector('.btn--win');
const p1 = document.querySelector('.player--0');
const p2 = document.querySelector('.player--1');
let playing = true;

let curr_score = 0;
let active_player = 0;
score01.textContent = 0;
score02.textContent = 0;
dice.classList.add('hidden');
win_btn.classList.add('hidden');

//active player's current score
const current_score = (player, score) =>
  (document.querySelector(`#current--${player}`).textContent = score);
const total_score = (player, score) =>
  (document.querySelector(`#score--${player}`).textContent = score);

// roll dice button fuction
roll_btn.addEventListener('click', function () {
  if (playing) {
    dice.classList.remove('hidden');
    const dice_num = Math.trunc(Math.random() * 6 + 1);
    console.log(dice_num);
    dice.classList.remove('hidden');
    dice.src = `dice-${dice_num}.png`;

    if (dice_num != 1) {
      curr_score += dice_num;
      current_score(active_player, curr_score);
    } else {
      curr_score = 0;
      current_score(active_player, curr_score);
      active_player = active_player === 0 ? 1 : 0;
      {
        p1.classList.toggle('player--active');
        p2.classList.toggle('player--active');
      }
    }
  }
});

//hold button fuction
hold_btn.addEventListener('click', function () {
  if (playing) {
    dice.classList.add('hidden');
    const final_score =
      Number(document.querySelector(`#score--${active_player}`).textContent) +
      curr_score;
    total_score(active_player, final_score);

    if (final_score >= 100) {
      dice.classList.add('hidden');
      win_btn.textContent = `🤟PLAYER ${active_player + 1} WIN`;
      win_btn.classList.remove('hidden');
      playing = false;
    } else {
      curr_score = 0;
      current_score(active_player, curr_score);
      active_player = active_player === 0 ? 1 : 0;
      console.log(90 + active_player);
    }
    {
      p1.classList.toggle('player--active');
      p2.classList.toggle('player--active');
    }
  }
});

//new game button fuction
new_btn.addEventListener('click', function () {
  active_player = 0;
  score01.textContent = 0;
  score02.textContent = 0;
  curr_score = 0;
  current_score(0, 0);
  current_score(1, 0);
  p1.classList.add('player--active');
  p2.classList.remove('player--active');
  win_btn.classList.add('hidden');
  dice.classList.add('hidden');
  playing = true;
});
