'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const allSections = document.querySelectorAll('.section');
const allButtons = document.getElementsByTagName('button');
const header = document.querySelector('header');
const scrollBtn = document.querySelector('.btn--scroll-to');
const s1 = document.querySelector('#section--2');
const h1 = document.querySelector('h1');
const ops = document.querySelector('.btn operation__tab');
console.log(ops);

/// Create Got it button ///
const cookies = document.createElement('div');
cookies.className = 'cookie-message';
cookies.innerHTML =
  'test message.<button class ="btn btn--cookies">Got it!</button> ';

header.before(cookies);
document.querySelector('.btn--cookies').addEventListener('click', function (e) {
  e.preventDefault();
  cookies.remove();
});

console.log(cookies);
cookies.classList.add('s', 'h');
cookies.classList.remove('s', 'h');
cookies.classList.toggle('s');
console.log(cookies.classList.contains('s', 'x'));
console.log(cookies.className);

document.documentElement.style.setProperty('--color-primary', 'orangered');

/// move to section1 ///
scrollBtn.addEventListener('click', function () {
  s1.scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  console.log(e.target);
  const target = e.target.getAttribute('href');
  document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
});

// document.querySelectorAll('.nav__link').forEach(el => {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     const sec = document.querySelector(id);
//     sec.scrollIntoView({ behavior: 'smooth' });
//   });
// });

// /// mouseenter function & remove function & setTimeOut///
// const popup = () => {
//   alert("That's h1!");
//   // h1.removeEventListener('mouseenter', popup);
// };
// h1.addEventListener('mouseenter', popup);
// setTimeout(() => {
//   h1.removeEventListener('mouseenter', popup);
// }, 3000);

// /// targeting events  feat. random int ///
// /// parents only, child with parents
// const randInt = (max, min) => {
//   return Math.floor(Math.random() * (max - min) + 1 + min);
// };
// const randColor = () =>
//   `RGB(${randInt(255, 0)},${randInt(255, 0)},${randInt(255, 0)})`;
// cookies.style.background = randColor();

// document.querySelector('.nav__link').addEventListener('click', function () {
//   this.style.background = randColor();
// });
// document.querySelector('.nav__links').addEventListener('click', function () {
//   this.style.background = randColor();
// });
// document.querySelector('.nav').addEventListener('click', function () {
//   this.style.background = randColor();
// });

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function (e) {
  e.preventDefault();
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach((modal, i) => modal.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
