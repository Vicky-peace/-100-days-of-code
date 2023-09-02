"use strict";

// function logger(){
//     console.log("My name is Jonas");
// }

// // calling /running /invoking a function
// logger();
// logger();
// logger();
// logger();

// function fruitProcessor(apples,oranges){
//     const juice = `Juice with ${apples} apples and  ${oranges} oranges.`;
//     return juice;
// }

// const applejuice= fruitProcessor(5,0);
// console.log(applejuice);

// const appleOranageJuice = fruitProcessor(2,4);
// console.log(appleOranageJuice);

// *Functions Declaration*/
function calcAge1(birthYear){
    
    return 2037- birthYear;
}

// invoke a function
const age1 =calcAge1(1991);


/*Function expresions*/
// const calcAge2 = function (birthYear){
//     return 2037 - birthYear;
// }

// const age2 = calcAge2(1991);
// console.log(age1, age2);


// Arrow function
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years`
// }


// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(2001, 'Victor'));
