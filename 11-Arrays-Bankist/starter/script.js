'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
// const account1 = {
//   owner: 'Jonas Schmedtmann',
//   movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//   interestRate: 1.2, // %
//   pin: 1111,
// };

// const account2 = {
//   owner: 'Jessica Davis',
//   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//   interestRate: 1.5,
//   pin: 2222,
// };

// const account3 = {
//   owner: 'Steven Thomas Williams',
//   movements: [200, -200, 340, -300, -20, 50, 400, -460],
//   interestRate: 0.7,
//   pin: 3333,
// };

// const account4 = {
//   owner: 'Sarah Smith',
//   movements: [430, 1000, 700, 50, 90],
//   interestRate: 1,
//   pin: 4444,
// };

// const accounts = [account1, account2, account3, account4];

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2023-11-18T21:31:17.178Z',
    '2023-12-23T07:42:02.383Z',
    '2024-01-28T09:15:04.904Z',
    '2024-04-01T10:17:24.185Z',
    '2024-08-08T14:11:59.604Z',
    '2024-08-27T17:01:17.194Z',
    '2024-08-30T23:36:17.929Z',
    '2024-08-31T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

console.log(
  accounts
    .map(acc => acc.movements)
    .flat()
    .reduce((acc, mov) => acc + mov, 0)
);

console.log(
  accounts.flatMap(acc => acc.movements).reduce((acc, mov) => acc + mov, 0)
);

// const initial = account => {
//   account.name = account.owner
//     .toLowerCase()
//     .split(' ')
//     .map(e => e[0])
//     .join('');
// };

//////////////////////////////////////////////////////
const convert = arr =>
  arr.map(account => {
    account.name = account.owner
      .toLowerCase()
      .split(' ')
      .map(e => e[0])
      .join('');
    // console.log(account);
  });

convert(accounts);
// console.log(account1);

const deposit1 = account1.movements.filter(e => e > 0);
console.log(deposit1);

const withdrawal = account1.movements.filter(e => e < 0);
console.log(withdrawal);

///////////////////////////////////////////////////////////

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const euToUS = 1.1;

// FUNCTIONS

// Functions;

// const displayMovements = function (movements, sort = false) {
//   containerMovements.innerHTML = '';

//   const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

//   movs.forEach(function (mov, i) {
//     const type = mov > 0 ? 'deposit' : 'withdrawal';

//     const html = `
//       <div class="movements__row">
//         <div class="movements__type movements__type--${type}">${
//       i + 1
//     } ${type}</div>
//         <div class="movements__value">${mov}€</div>
//       </div>
//     `;

//     containerMovements.insertAdjacentHTML('afterbegin', html);
//   });
// };

// const calcDisplayBalance = function (acc) {
//   acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
//   labelBalance.textContent = `${acc.balance}€`;
// };

// const calcDisplaySummary = function (acc) {
//   const incomes = acc.movements
//     .filter(mov => mov > 0)
//     .reduce((acc, mov) => acc + mov, 0);
//   labelSumIn.textContent = `${incomes}€`;

//   const out = acc.movements
//     .filter(mov => mov < 0)
//     .reduce((acc, mov) => acc + mov, 0);
//   labelSumOut.textContent = `${Math.abs(out)}€`;

//   const interest = acc.movements
//     .filter(mov => mov > 0)
//     .map(deposit => (deposit * acc.interestRate) / 100)
//     .filter((int, i, arr) => {
//       // console.log(arr);
//       return int >= 1;
//     })
//     .reduce((acc, int) => acc + int, 0);
//   labelSumInterest.textContent = `${interest}€`;
// };

// const createUsernames = function (accs) {
//   accs.forEach(function (acc) {
//     acc.username = acc.owner
//       .toLowerCase()
//       .split(' ')
//       .map(name => name[0])
//       .join('');
//   });
// };
// createUsernames(accounts);

// const updateUI = function (acc) {
//   // Display movements
//   displayMovements(acc.movements);

//   // Display balance
//   calcDisplayBalance(acc);

//   // Display summary
//   calcDisplaySummary(acc);
// };

// ///////////////////////////////////////
// // Event handlers
// let currentAccount;

// btnLogin.addEventListener('click', function (e) {
//   // Prevent form from submitting
//   e.preventDefault();

//   currentAccount = accounts.find(
//     acc => acc.username === inputLoginUsername.value
//   );
//   console.log(currentAccount);

//   if (currentAccount?.pin === Number(inputLoginPin.value)) {
//     // Display UI and message
//     labelWelcome.textContent = `Welcome back, ${
//       currentAccount.owner.split(' ')[0]
//     }`;
//     containerApp.style.opacity = 100;

//     // Clear input fields
//     inputLoginUsername.value = inputLoginPin.value = '';
//     inputLoginPin.blur();

//     // Update UI
//     updateUI(currentAccount);
//   }
// });

// btnTransfer.addEventListener('click', function (e) {
//   e.preventDefault();
//   console.log(currentAccount);
//   const amount = Number(inputTransferAmount.value);
//   const receiverAcc = accounts.find(
//     acc => acc.username === inputTransferTo.value
//   );
//   inputTransferAmount.value = inputTransferTo.value = '';

//   if (
//     amount > 0 &&
//     receiverAcc &&
//     currentAccount.balance >= amount &&
//     receiverAcc?.username !== currentAccount.username
//   ) {
//     // Doing the transfer
//     currentAccount.movements.push(-amount);
//     receiverAcc.movements.push(amount);

//     // Update UI
//     updateUI(currentAccount);
//   }
//
// btnLoan.addEventListener('click', function (e) {
//   e.preventDefault();

//   const amount = Number(inputLoanAmount.value);

//   if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
//     // Add movement
//     currentAccount.movements.push(amount);

//     // Update UI
//     updateUI(currentAccount);
//   }
//   inputLoanAmount.value = '';
// });

// btnClose.addEventListener('click', function (e) {
//   e.preventDefault();

//   if (
//     inputCloseUsername.value === currentAccount.username &&
//     Number(inputClosePin.value) === currentAccount.pin
//   ) {
//     const index = accounts.findIndex(
//       acc => acc.username === currentAccount.username
//     );
//     console.log(index);
//     // .indexOf(23)

//     // Delete account
//     accounts.splice(index, 1);

//     // Hide UI
//     containerApp.style.opacity = 0;
//   }

//   inputCloseUsername.value = inputClosePin.value = '';
// });

// let sorted = false;
// btnSort.addEventListener('click', function (e) {
//   e.preventDefault();
//   displayMovements(currentAccount.movements, !sorted);
//   sorted = !sorted;
// });

let now = new Date();

// const convertDate = date => {
//   const day = `${date.getDate()}`.padStart(2, 0);
//   const month = `${date.getMonth() + 1}`.padStart(2, 0);
//   const year = date.getFullYear();
//   const hour = `${date.getHours()}`.padStart(2, 0);
//   const minute = `${date.getMinutes()}`.padStart(2, 0);
//   return `${year}/${month}/${day} ${hour}:${minute}`;
// };

const option = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
};

const convertDate = date => {
  return new Intl.DateTimeFormat('kor-KO', option).format(date);
};

const convertISODate = date => {
  return date.toISOString();
};

const moneyOption = {
  style: 'currency',
  currency: 'KOR',
};

const convertMoney = amount => {
  return `${Intl.NumberFormat('en-US').format(amount)}€`;
};

const timePassed = (a, b = now) => {
  const tp = Math.round((b - a) / (1000 * 60 * 60 * 24));
  if (tp === 0) return 'today';
  if (tp === 1) return 'yesterday';
  if (tp <= 7) return `${tp} days ago`;
  else return convertDate(a);
};

console.log(timePassed(new Date(2023, 7, 31, 6)));

const balance = (ac, sort = false) => {
  ac.balance = ac.movements.reduce((acc, value, key) => acc + value, 0);

  labelBalance.textContent = convertMoney(ac.balance.toFixed(2));
  labelSumInterest.textContent = convertMoney(
    ((ac.balance * ac.interestRate) / 100).toFixed(2)
  );
  labelSumIn.textContent = convertMoney(
    ac.movements
      .filter(e => e > 0)
      .reduce((acc, value) => acc + value, 0)
      .toFixed(2)
  );
  labelSumOut.textContent = convertMoney(
    ac.movements
      .filter(e => e < 0)
      .map(e => Math.abs(e))
      .reduce((acc, value) => acc + value, 0)
      .toFixed(2)
  );
  labelDate.textContent = convertDate(now);

  const movs = sort ? ac.movements.slice().sort((a, b) => a - b) : ac.movements;
  containerMovements.innerHTML = '';

  movs.forEach((value, index) => {
    const displayDate = timePassed(new Date(ac.movementsDates[index]));
    const type = value > 0 ? 'deposit' : 'withdrawal';
    const html = `<div class="movements__row">
            <div class="movements__type movements__type--${type}">${
      index + 1
    } ${type}</div>
            <div class="movements__date">${displayDate}</div>
            <div class="movements__value">${convertMoney(
              value.toFixed(2)
            )}</div>
          </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
  document.querySelectorAll('.movements__row').forEach((row, i) => {
    // if (i % 2 === 0) row.style.backgroundColor = 'gold';
    if (i % 3 === 0) row.style.backgroundColor = 'ivory';

    document.querySelectorAll('.movements__value').forEach((row, i) => {
      if (parseInt(row.textContent) < 0) row.style.color = 'red';
    });
  });
};

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  balance(userName, !sorted);
  sorted = !sorted;
});

let userName, timer;

const logOutTimer = () => {
  let time = 120;
  const tick = () => {
    {
      const padMin = `${Math.trunc(time / 60)}`.padStart(2, 0);
      const padSec = `${time % 60}`.padStart(2, 0);
      labelTimer.textContent = `${padMin}:${padSec}`;
      if (time === 0) {
        clearInterval(timer);
        document.querySelector('.app').style.opacity = 0;
        document.querySelector('.welcome').textContent =
          'Log in to get started';
        inputLoginUsername.value = '';
      }
      time--;
    }
  };
  tick();
  timer = setInterval(tick, 1000);
  return timer;
};

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  if (timer) clearInterval(timer);
  logOutTimer();
  userName = accounts.find((acc, key) => acc.name === inputLoginUsername.value);
  if (userName !== undefined)
    if (userName.pin === Number(inputLoginPin.value)) {
      balance(userName);
      containerApp.style.opacity = 100;
      labelWelcome.textContent = `Welcome ${userName.owner.split(' ')[0]}`;
      inputLoginPin.value = '';
    } else alert('Wrong password');
  else alert('check ID again');
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  if (timer) clearInterval(timer);
  logOutTimer();
  const transAmount = Number(inputTransferAmount.value);
  const transTo = inputTransferTo.value;
  const transName = accounts.find(acc => acc.name === transTo);
  const totalBalace = userName.balance;
  if (totalBalace < transAmount) alert('Not enough Money');
  else {
    if (transName && transTo !== userName.name && transAmount > 0) {
      transName.movements.push(transAmount);
      transName.movementsDates.push(convertISODate(now));
      userName.movements.push(-transAmount);
      userName.movementsDates.push(convertISODate(now));

      balance(userName);
      inputTransferTo.value = inputTransferAmount.value = '';
    } else alert('Check Again');
  }
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (timer) clearInterval(timer);
  logOutTimer();
  const index = accounts.findIndex(
    acc => acc.name === inputCloseUsername.value
  );
  const delName = inputCloseUsername.value;
  console.log(index);
  if (accounts[index]?.pin === Number(inputClosePin.value)) {
    if (accounts[index]?.name === userName.name) {
      inputLoginUsername.value = '';
      containerApp.style.opacity = 0;
    }
    alert(`${accounts[index].owner.split(' ')[0]}'s account just removed`);
    accounts.splice(index, 1);
    inputClosePin.value = inputCloseUsername.value = '';
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  if (timer) clearInterval(timer);
  logOutTimer();
  const amount = +inputLoanAmount.value;

  setTimeout(() => {
    if (userName.balance * 0.8 > amount) {
      userName.movements.push(amount);
      userName.movementsDates.push(convertISODate(now));
      balance(userName);
    } else alert('Not enough balace');
  }, 3000);
  inputLoanAmount.value = '';
});

// const maxi = e =>
//   e.reduce((acc, value) => {
//     if (acc > value) return acc;
//     else return value;
//   });
// console.log(maxi(account1.movements));

/////////////////////////////////////////////////
/////////////challange #2///////////////////////
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const sl = movements.sort((a, b) => b - a);
// console.log(sl);
const sll = movements.indexOf(70);
console.log(sll);

const movein = movements.filter(e => e < 0);
const account = accounts.find((acc, value) => acc.owner === 'Sarah Smith');
console.log(account);

const convertApp = e => {
  const convertAge = e
    .map(age => (age > 2 ? 16 + age * 4 : age * 2))
    .filter(e => e >= 18)
    .reduce((acc, value, i, arr) => acc + value / arr.length, 0);

  console.log(convertAge);
};

convertApp([5, 2, 4, 1, 15, 8, 3]);
convertApp([16, 6, 10, 5, 6, 1, 4]);
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);
const movemap = movements.map(
  (value, key, array) =>
    `Movement ${key + 1} : You ${
      value > 0 ? 'deposit' : 'withdrawal'
    } $${Math.abs(value)} / [${array}]`
);
// console.log(movemap);

const dollor = movements
  .filter(e => e > 0)
  .map((mov, i, arr) => {
    // console.log(arr);
    return mov * euToUS;
  })
  .reduce((acc, mov) => acc + mov, 0);

// currencies.forEach((value, key, map) => {
//   console.log(`${value},${key},${map}`);
// });

// movements.forEach((e, i, arr) => {
//   e > 0
//     ? console.log(`Movement ${i + 1} : You deposited $${e} `)
//     : console.log(`Movement ${i + 1} : You withdrawal $${Math.abs(e)} `);
// });

/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['i', 'j', 'k', 'l', 'm'];

// console.log(arr.splice(1, 3));
// console.log(arr);
// // arr.splice(-4);
// // console.log(arr);
// console.log(arr2.reverse());
// console.log(arr2);

// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);
// console.log(letters.join(', '));

// const arr3 = [23, 11, 64];
// console.log(arr3[2]);
// console.log(arr3.at(2));
// console.log(arr3[arr3.length - 1]);
// console.log(arr3.slice(-1)[0]);
// console.log(arr3.at(-1));
// arr3.splice(0, 2);
// console.log(arr3[0]);

///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [3, 5, 2, 12, 7],
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const chenkDogs = (data1, data2) => {
  const data1Rev0 = data1.slice(1, data1.length - 2).concat(data2);

  const dogList = list => {
    list.forEach((value, key) => {
      const type =
        value >= 3
          ? `is an adult. and is ${value} years old`
          : 'is still puppy';
      console.log(`Dog number ${key + 1} ${type}`);
    });
  };

  console.log(`[Julia's ${data1Rev0.length} Dogs]`);
  dogList(data1Rev0);

  console.log(`[Kate's ${data2.length} Dogs]`);
  dogList(data2);
};

// chenkDogs([3, 5, 2, 12, 7], [3, 5, 2, 12, 7]);
// chenkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

const rand = Array.from({ length: 6 }, cur => Math.trunc(Math.random() * 45));
console.log(rand);

const sum = accounts
  .flatMap(acc => acc.movements)
  .filter(e => e > 0)
  .reduce((ac, mov) => ac + mov, 0);

const msum = accounts
  .flatMap(acc => acc.movements)
  .filter(e => e < 0)
  .reduce((ac, mov) => (ac += mov), 0);

console.log(msum);

const { depo, withdraw } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sum, mov) => {
      sum[mov > 0 ? 'depo' : 'withdraw'] += mov;
      return sum;
    },
    { depo: 0, withdraw: 0 }
  );

console.log(withdraw, depo);

///////////////////////////////////////
// Coding Challenge #4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
GOOD LUCK 😀
*/
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

/// Q1 ///
dogs.map(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));
console.log(dogs);

/// Q2 ///
const sara = dogs.find(acc => acc.owners.includes('Sarah'));
const feed = acc => {
  if (acc.curFood > acc.recFood * 1.1)
    console.log(
      `You feed too much! reduce atleast ${acc.curFood - acc.recFood * 1.1}`
    );
  else if (acc.curFood < acc.recFood * 0.9)
    console.log(
      `You feed too small! increase atleast ${acc.recFood * 0.9 - acc.curFood}`
    );
  else console.log('You feed good!');
};
feed(sara);

/// Q3 ///
const ownersEatTooMuch = dogs
  .filter(e => e.curFood > e.recFood * 1.1)
  .flatMap(e => e.owners);

const ownersEatTooLittle = dogs
  .filter(e => e.curFood < e.recFood * 0.9)
  .flatMap(e => e.owners);

/// Q4 ///
console.log(`${ownersEatTooLittle.join(' and ')}'s dog eat too little`);
console.log(`${ownersEatTooMuch.join(' and ')}'s dog eat too much`);

/// Q5 ///
console.log(dogs.find(e => e.curFood === e.recFood * 1.1) ? true : false);

/// Q6 ///
console.log(
  dogs.find(e => e.curFood < e.recFood * 1.1 && e.curFood > e.recFood * 0.9)
    ? true
    : false
);

/// Q7 ///
console.log(
  dogs.find(e => e.curFood < e.recFood * 1.1 && e.curFood > e.recFood * 0.9)
);

/// Q8 ///
const recommendedFood = dogs.sort((a, b) => a.recFood - b.recFood);
console.log(recommendedFood);

console.log(23 === 23.0);
console.log(0.1 + 0.2);

console.log(2 ** 10);

[...movements].forEach((row, i) => {
  console.log(`${i + 1} : ${row}`);
});

console.log(...[...movements]);

console.log([...document.querySelectorAll('.movements__row')]);
console.log(document.querySelectorAll('.movements__row'));

console.log(100_000_000);
console.log(parseInt('1_000'));
console.log(BigInt(92834));
const theDay = new Date(2022, 10, 20, 10, 32);
console.log(theDay.getFullYear());
console.log(theDay.getMonth());
console.log(theDay.getHours());
console.log(theDay.toISOString());
console.log(theDay.getTime());
console.log(Date());
console.log(Date.now());
theDay.setHours(13);
console.log(theDay.getHours());
const mow = new Date();
console.log(mow.toISOString());

console.log(convertDate(now));

setTimeout(() => {
  console.log('🪵');
}, 2000);

setTimeout((a, b) => console.log(`${a} / ${b}`), 3000, '🔥', '👻');

console.log(59 % 60);
