// const jonas ={
//     firstName: 'Jonas',
//     lastName : 'Schedtmann',
//     job:  'teacher',
//     friends: ['Michael','Steven', 'Peter']
// }

/* Retrieving objects elements using Dot Notation */
// const jonas ={
//         firstName: 'Jonas',
//         lastName : 'Schedtmann',
//         job:  'teacher',
//         friends: ['Michael','Steven', 'Peter']
//     }
// // console.log(jonas)
// console.log(jonas.lastName);
// console.log(jonas['lastName'])

// const nameKey = 'Name';
// console.log(jonas['first', + nameKey]);
// console.log(jonas['last', + nameKey]);

// const interesteIn = prompt("What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends");
// console.log(interesteIn);

// Challenge
// Jonas has 3 friends and his best friend is called Michael
// console.log(jonas['firstName'])
// console.log(jonas.friends.length)
// console.log(jonas.friends[0])


// Objects Methods

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     birthYear: 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Steven', 'Peter'],
//     hasDriversLicense: false,

    // calcAge: function(birthYear){
    //     return 2037 - birthYear;
    // }

    // calcAge : function(){
    //     // console.log(this);
    //     return 2037 - this.birthYear;
    // }

//     calcAge : function(){
//         this.age = 2037 - this.birthYear;
//         return this.age;
//     },
    
//     getSummary: function(){
//         return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a': 'no'} driver's license`
//     }

// };
// console.log(jonas.calcAge());
 
// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);

// // challange
// // "Jonas is a 46-year old teacher, and he has a driver's license"

// console.log(jonas.getSummary());


///////////////////////////////////////
// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/
const Mark = {
    fullName: 'Mark Miller',
    mass: 78 ,
    height: 1.69,
     
    calcBMI : function(){
        // calculate and store BMI value to a property
         this. BMI = this.mass / this.height ** 2;

         return this.BMI;
    }

}



const John = {
    fullName: 'John Smith',
    mass: 92 ,
    height: 1.95,

    calcBMI : function(){
        // calculate and store BMI value to a property
         this. BMI = this.mass / this.height ** 2;

         return this.BMI;
    }
 
}


if(Mark.BMI > John.BMI){
console.log(`Mark Miller's BMI ${Mark.calcBMI()} is higher than John Smith's ${John.calcBMI()}`);
} else{
    console.log(`John Smith's BMI ${John.calcBMI()} is higher than Mark Miller's ${Mark.calcBMI()}`)  ;
}
// 
// console.log(Mark.calcBMI())