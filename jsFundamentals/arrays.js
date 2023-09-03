//  const friends = ['Michael', 'Steven', 'John'];
//  console.log(friends);

//  const year = new Array(1991,1984,2000,2001);
//  console.log(year);

//  console.log(friends[0]);

// //  To get the length of an array
//  console.log(friends.length)
// //  To get the last element
//  console.log(friends[friends.length -1]); 


// //  Mutating the array
// friends[2] = 'Peace';
// console.log(friends);
// const firstName = 'Jonas'
// const jonas = [firstName, 'Schmedtmann', 2037- 1991, 'teacher', friends]
// console.log(jonas)


// Exercise
// const calcAge = function (birthYear){
//     return 2037 - birthYear;
// }
// const years = [1990,1967,2002,2018];

// const age1 = calcAge(years[0]);
// console.log(age1);


// Array Operations(Methods)
// const friends = ['Michael', 'Steven', 'Peter']
// const newLength = friends.push('Jay'); /* use to add to the end of an array */
// console.log(newLength);

// Addition to to the first elelment of an array
// friends.unshift('John');
// console.log(friends);


// Remove last elemet from an array
// friends.pop(); //Last
// console.log(friends);

// Remove the first element
// friends.shift();
// console.log(friends);

// friends.shift();

//  console.log(friends.indexOf('Steven'));


/* Array Methods (basics)*/
/*
const friends = ['Michael', 'Steven', 'Peter'];

const newlength= friends.push('Jay');//addition to end of the array
console.log(friends) 
console.log(newlength)

// addition to the begginning of the array
friends.unshift('John');
console.log(friends)


// Remove elements from last element of the array
const popped =friends.pop(); //Last
console.log(popped);
console.log(friends)

// Remove the first elememt of the array
friends.shift(); // remove fast
console.log(friends);

console.log(friends.indexOf('Steven'));

console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));


if(friends.includes('Bob')){
    console.log('You have a friend called Michael');
}
*/

/*Coding Challange */
///////////////////////////////////////
// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/
// let bill = 100 ;
// let tip;



const calcTip = bill => bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill ;


const bills = [125,555,44];
const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])]

console.log(tips,bills)