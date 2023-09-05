// /* For Loop */

// // for loop keeps running while condition is TRUE
// for(rep= 1; rep <= 10; rep ++){
//     console.log(`Lifing weights repition ${rep}  🏋️`)
// }

// const types = [];

// const jonas = [
//     'Jonas',
//     'Schmedtmann',
//     2037-1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
//     true
// ];

// for(let i = 0; i < jonas.length ; i++){
//     // reading jonas array
//     console.log(jonas[i], typeof jonas[i]);

//     // Filling types array
//     // types[i] = typeof jonas[i];
//     types.push(typeof jonas[i]);
// }
// console.log(types);

// const years = [1991,2007, 1969, 2020];
// const ages = [];

// for(let i =0 ;i < years.length ; i++){
//    ages.push(2037 - years[i])
// }
// console.log(ages);

// // Continue and break
// console.log('=== ONLY STRINGS ===')
// for (let i = 0; i < jonas.length; i++){

//     if(typeof jonas[i] !== 'string') continue;

//     console.log(jonas[i], typeof jonas[i]);
// }

// console.log('=== BREAK WITH NUMBER ===')
// for (let i = 0; i < jonas.length; i++){

//     if(typeof jonas[i] === 'number') continue;

//     console.log(jonas[i], typeof jonas[i]);
// }

const jonas = [
  "Jonas",
  "Schmedmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

// 0, 1, ,,,, 4
//4, 3, ,,,,0

// for( let i = jonas.length - 1; i >= 0 ; i--){
//     console.log(jonas[i]);
// }

// for (let exercise = 1 ; exercise <= 4; exercise ++){
//     console.log(`====== Starting exercise ${exercise}`)

//     for (let rep = 1; rep < 6; rep++){
//         console.log(`Lifting weights repitition ${rep}`)
//     }
// }

/* While loop */

// let rep = 1;

// while(rep <= 10){
//     console.log(`Lifting weights repitition ${rep}`)
//     rep++;
// }

// let dice =Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

// while(dice !== 6){
//   console.log(`You rolled a ${dice}`);
//   dice =Math.trunc(Math.random() * 6) + 1;
// }

///////////////////////////////////////
// Coding Challenge #4

/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = bill => bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill ;
for(let i=0 ; i <= bills.length ; i++){
   console.log(calcTip(i)) ;
   tips.push(calcTip(i));
    
}
