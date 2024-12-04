'use strict';

const greet = greeting => name => console.log(`${greeting} ${name}`);

greet('hello')('dury');

const addtax = (rate, value) => value + value * rate;
const test = addtax.bind(null, 0.2);
console.log(test(2000));

// const norVAT = addtax(0.23);
// console.log(norVAT(100));

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript ', '1: Python ', '2: Rust ', '3: C++ '],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = prompt(`${this.question}\n${this.options.join('\n')}`);
    if (answer >= 0 && answer < 4) {
      this.answers[answer]++;
      console.log(this.answers);
      this.displayResults();
    } else alert('You input wrong number. poll again plz');
  },

  displayResults() {
    for (const a in this.options)
      console.log(
        `${this.options[a].split(':')[1].padEnd(15, '-')} ${this.answers[a]}`
      );
  },
};

// document.addEventListener('click', poll.registerNewAnswer.bind(poll));
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

const nn = [0, 0, 0, 0];
console.log(nn.join(', '));
console.log(nn);

let f;

const a = function () {
  let g = 23;
  return function () {
    g *= 2;
    console.log(g);
  };
};

const multi = a();
multi();

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();

console.log(1);

// 연차 계산 함수
function calculateAnnualLeave(joinDate) {
  // 현재 날짜 가져오기
  const today = new Date();

  // 입사일로부터 경과된 연도 계산
  const yearsWorked = today.getFullYear() - joinDate.getFullYear();

  // 입사일이 이미 지나지 않았다면 1년 미만으로 계산
  const monthsWorked = today.getMonth() - joinDate.getMonth();
  if (
    monthsWorked < 0 ||
    (monthsWorked === 0 && today.getDate() < joinDate.getDate())
  ) {
    yearsWorked--;
  }

  // 연차 계산 (예시: 1년에 15일의 연차가 부여되는 경우)
  const annualLeavePerYear = 15;
  let annualLeave = yearsWorked * annualLeavePerYear;

  // 1년 미만 근무자에 대해서는 비례 계산
  if (yearsWorked < 1) {
    const monthsSinceJoin =
      (today.getFullYear() - joinDate.getFullYear()) * 12 +
      today.getMonth() -
      joinDate.getMonth();
    annualLeave = Math.round((annualLeavePerYear / 12) * monthsSinceJoin);
  }

  // 최소 0일 이상이어야 하므로 0 이하일 경우 0으로 설정
  if (annualLeave < 0) {
    annualLeave = 0;
  }

  return annualLeave;
}

// 사용 예시
const joinDate = new Date('2020-05-10'); // 입사일 입력 (YYYY-MM-DD)
const annualLeave = calculateAnnualLeave(joinDate);

console.log(`현재까지 누적된 연차: ${annualLeave}일`);
console.log(new Date().getMonth());
