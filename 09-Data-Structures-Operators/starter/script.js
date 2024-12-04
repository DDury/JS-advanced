'use strict';

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
//   order: function ({ address, start = 0, main = 0, time }) {
//     console.log(
//       `order recieved || AT ${time} || ${this.starterMenu[start]} & ${this.mainMenu[main]} to ${address}`
//     );
//   },
// };

// const { name, mainMenu, openingHours } = restaurant;
// console.log(name, mainMenu, openingHours);
// console.log(restaurant);

// const [a, , b] = restaurant.mainMenu;
// console.log(a, b);

// const { mainMenu: resname } = restaurant;
// console.log(resname);

// const { menu = [], starterMenu: starter = [] } = restaurant;
// console.log(restaurant.menu, starter);

// let A = 11;
// let B = 22;
// let C = 33;

// const obj = { A: 1, B: 2, C: 3 };

// ({ A, C } = obj);

// console.log(A, C);

// const { fri: F } = openingHours;

// let {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(restaurant.openingHours.fri.open);
// console.log(o, c);

// restaurant.order({
//   time: '22:15',
//   start: 2,
//   main: 1,
//   address: "dury's house",
// });
// 2 == 2 && console.log(F);

// const guest_num = null;

// const guests = guest_num && 10;
// const guest1 = guest_num || 11;
// const guest2 = guest_num ?? 12;

// console.log(guests, guest1, guest2);
// const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// const openingHours = {
//   thu: {
//     open: 12,
//     close: 22,
//   },
//   fri: {
//     open: 11,
//     close: 23,
//   },
//   sat: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   openingHours: openingHours,
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
//   printGoals(...scored) {
//     const num_goal = scored.length;
//     return `${num_goal} goals were scored : ${scored}`;
//   },
// };

// // 1. Create one player array for each team (variables 'players1' and 'players2')
// const player1 = game.players[0];
// const player2 = game.players[1];
// console.log(player1, player2);

// // 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
// // let gk = '';
// // let fielders = [];
// let [gk, ...fielders] = player1;
// const team1st = { GoalKeeper: gk, fieldPlayers: fielders };
// [gk, ...fielders] = player2;
// const team2nd = { GoalKeeper: gk, fieldPlayers: fielders };
// console.log(team1st, team2nd);

// // 3. Create an array 'allPlayers' containing all players of both teams (22 players)
// const allPlayers = [...player1, ...player2];
// console.log(allPlayers);

// // 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
// const player1Final = [...player1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(player1Final);

// // 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// // 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
// game.printGoals(...['a', 'b', 'c']);

// // 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.
// console.log(team1 < team2 ? `team1's odds : ${team1}` : 'team2');

// // TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored
// game.printGoals('Daviesss', 'Muller', 'Lewandowski', 'Kimmich');

// // GOOD LUCK 😀

// for (const pros of allPlayers) console.log(pros);
// for (const pros of allPlayers.entries()) {
//   console.log(`${pros[0] + 1} : ${pros[1]}`);
// }
// if (game.openingHours && game.openingHours.mon)
//   console.log(game.openingHours.mon.open);

// //with optional chaining
// console.log(game.openingHours?.fri?.open);

// for (const day of weekdays) {
//   // console.log(day);
//   const open = game.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day} we open at ${open}`);
// }

// console.log(game.printGoals?.('kim', 'lee') ?? 'method does not exist');

// for (const day of Object.keys(openingHours)) console.log(day);

// const properties = Object.keys(openingHours);

// let working_day = `We are opening ${properties.length} days : `;
// for (const day of properties) working_day += `${day}, `;

// console.log(working_day);

// const working_hour = Object.values(openingHours);
// console.log(working_hour);

// const entry = Object.entries(openingHours);
// console.log(entry);

// for (const [key, { open, close }] of entry)
//   console.log(`We are open on ${key} at ${open} and close at ${close}`);

///////////////////////////////////////
// const games = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   scorers: function () {
//     let s = 1;
//     for (const x of this.scored) {
//     }
//   },
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // Coding Challenge #2

// /*
// Let's continue with our football betting app!

// 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
// 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
// 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
//       Odd of victory Bayern Munich: 1.33
//       Odd of draw: 3.25
//       Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

// BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
//       {
//         Gnarby: 1,
//         Hummels: 1,
//         Lewandowski: 2
//       }

// GOOD LUCK 😀
// */

// // 1 //
// let s = 1;
// for (const player of games.scored) {
//   console.log(`Goal ${s} : ${player}!`);
//   s++;
// }

// // 2 //
// let avg = 0;
// const odd_value = Object.values(games.odds);
// for (const x of odd_value) avg += x;
// console.log(avg / odd_value.length);

// // 3 //

// const ent = Object.entries(games.odds);
// for (const [key, value] of ent) {
//   const str = key === 'x' ? 'draw' : 'victory';
//   const team = games[key] ?? '';
//   console.log(`odd of ${str} ${team} : ${value}`);
// }

// const scorers = {};
// for (const player of games.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }
// console.log(scorers);
// console.log(scorers['Gnarby']);

// scorers['kim'] = 1;
// scorers['kim']++;
// scorers['kim']++;
// scorers['kim']++;
// scorers['kims'] = 1;
// scorers['kims']++;
// console.log(scorers);

// const fx = 3 === 4 ? 1 : 2;
// console.log(fx);

// const orderset = new Set(['pizza', 'pasta', 'risotto', 'pizza', 'pasta']);
// console.log(orderset.size);
// orderset.add('rice');
// orderset.delete('rice');
// console.log(orderset);
// for (const menu of orderset) console.log(menu);

// const menu = [...orderset];
// console.log(menu);
// console.log(menu.length);

// const mapping = new Map();
// mapping.set(document.querySelector('h1'), 'heading');
// mapping.set(document.querySelector('body'), 'body');

// console.log(mapping);
// console.log(mapping.get(document.querySelector('h1')));

// const quiz = new Map([
//   ['question', 'what is the best way to learn programming'],
//   [1, 'gamming'],
//   [2, 'youtube'],
//   [3, 'udemy'],
//   ['correct', 3],
//   [true, 'correct👍'],
//   [false, 'try again👻'],
// ]);

// quiz.set('coding', 'fun!!!');

// console.log(quiz.get(quiz.get(1) === quiz.get('correct')));

// for (const [key, value] of quiz) {
//   if (typeof key === 'number') console.log(`Answer ${key} : ${value}`);
// }

// // const answer = Number(prompt('your answer?'));
// // console.log(quiz.get(answer === quiz.get('correct')));
// console.log(quiz);
// const quizcon = [...quiz];

// for (const [key, value] of quizcon) {
//   console.log(key);
// }

// console.log(quizcon);

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// const all_events = [];
// for (let [time, event] of gameEvents) {
//   all_events.push(event);
// }
// console.log(all_events);
// const all_event = [...new Set(all_events)];
// console.log(all_event);

// gameEvents.delete(64);
// // gameEvents.set(64, 'deleted');
// console.log(gameEvents);

// const gameEvents_convert = [...gameEvents];

// const finishTime = Number(gameEvents_convert[gameEvents_convert.length - 1][0]);
// const eventNum = gameEvents.size;

// console.log(finishTime / eventNum);

// for (let [time, event] of gameEvents) {
//   const half = time <= 45 ? 'FIRST HALF' : 'SECOND HALF';
//   console.log(`[${half}] ${time} : ${event} `);
// }

// const str = 'korean air line corp air';
// console.log(str.toUpperCase().trim());
// console.log(str.replace(/air/g, 'space'));
// console.log(str.includes('air'));
// console.log(str.split(' '));
// const text = str.split(' ').join('|');
// console.log(text);

// const new_str = [];
// for (const content of str.split(' ')) {
//   const new_content =
//     content[0].toUpperCase() + content.slice(1, content.length);
//   new_str.push(new_content);
// }

// console.log(new_str.join(' '));

// console.log('asdf'.slice(1, 4));

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  let s = 1;
  const text = document.querySelector('textarea').value;
  const text_spl = text.split('\n');
  for (const word of text_spl) {
    const [first, second] = word.toLowerCase().trim().split('_');
    const finalword = first + second[0].toUpperCase() + second.slice(1);
    console.log(finalword.padEnd(20, ' ') + '✅'.repeat(s));
    s++;
  }
});

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const schedule = flights.split('+');
for (const flight of schedule) {
  const [way, from, to, time] = flight.split(';');
  const [hour, min] = time.split(':');
  const warning = way.includes('Delayed') ? '🔴' : '';
  const new_way = way.replace(/_/g, ' ');
  const final_schedule = `${warning} ${new_way} from ${from
    .slice(0, 3)
    .toUpperCase()} to ${to.slice(0, 3).toUpperCase()} (${hour}h${min})`;
  console.log(final_schedule.padStart(45, ' '));
}
