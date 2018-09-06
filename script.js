// Data Types
/**
var firstName = 'Sultan';
console.log(firstName);

var age = 28;
console.log(age)

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);
 */

 // Variable mutation and type coercion
/**
 var firstName = 'Sultan';
 var age = 20;

 // Type coercion
 console.log(firstName + ' ' + age);

 var job, isMarried;
 job = 'webdev';
 isMarried = false;

 console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

 // Variable mutation
age = 'twenty';
job = 'testing';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);
var lastName = prompt('What is his last Name?');
console.log(firstName + ' ' + lastName);
 */

 //Basic operators
/**
 var now = 2018;
 var ageSultan = 20;
 var ageMark = 33;
 // Math operators
 var yearSultan = now - ageSultan;
 var yearMark = now - ageMark;
 console.log(yearSultan);
 console.log(now + 2);

 // Logical operators
var sultanOlder = ageSultan > ageMark;
console.log(sultanOlder);

// typeof operator
console.log(typeof sultanOlder);
console.log(typeof ageSultan);
console.log(typeof 'Mark is older than sultan');
var x;
console.log(typeof x);
 */

// Operator precedence

// var now = 2018;
// var yearSultan = 1998;
// var fullAge = 18;

// var isFullAge = now - yearSultan >= fullAge;
// console.log(isFullAge);

// var ageSultan = now - yearSultan;
// var ageMark = 35;
// var average = (ageSultan + ageMark)/2;
// console.log(average);

// // Multiple assignments
// var x, y;
// x = y = (3 + 5) * 4 - 6; //8 * 4 - 6 // 32 - 6 // 26
// console.log(x, y);

// // More operators
// x *= 2;
// console.log(x);
// x += 10;
// console.log(x);
// X++;

//BMI
// var massSultan = 50;
// var massMark = 60;
// var heightSultan = 170;
// var heightMark = 180;

// var bmiSultan = massSultan / (heightSultan * heightSultan);
// var bmiMark = massMark / (heightMark * heightMark);
// var markHigherBmi = bmiMark > bmiSultan;
// console.log('Is mark\'s BMI higher than Sultan\'s? ' + markHigherBmi);

// if / else statements

// var firstName = 'Sultan';
// var civilStatus = 'single';

// if (civilStatus === 'married') {
//     console.log(firstName + ' is married!');
// } else {
//     console.log(firstName + ' will hopefully marry soon :)');
// }

// var isMarried = true;
// if (isMarried) {
//     console.log(firstName + ' is married!');
// } else {
//     console.log(firstName + ' will hopefully marry soon :)');
// }

// var massSultan = 50;
// var massMark = 60;
// var heightSultan = 170;
// var heightMark = 180;

// var bmiSultan = massSultan / (heightSultan * heightSultan);
// var bmiMark = massMark / (heightMark * heightMark);

// if (bmiMark > bmiSultan) {
//     console.log('Mark\'s BMI higher than Sultan\'s');
// } else {
//     console.log('Sultan\'s BMI is higher than Mark\'s')    
// }

// boolean logic

// var firstname = 'Sultan';
// var age = 20;

// if (age < 13) {
//     console.log(firstName + ' is a boy.');
// } else if (age >= 12 && age < 20){ //between 13 and 20
//     console.log(firstName + ' is a teenager.');
// } else if (age >= 20 && age < 30){
//     console.log(firstName + ' is a young man.');
// } else {
//     console.log(firstName + ' is a man.');
// }

// The Ternary Operator and Switch Statements

// var firstName = 'Sultan';
// var age = '16';

// // Ternary Operator
// age >= 18 ? console.log(firstName + ' drinks coffee.') 
// : console.log(firstName + ' drinks juice.');

// var drink = age >= 18 ? 'coffee' : 'juice';
// console.log(drink);

// if (age >= 18){
//     var drink = 'coffee';
// } else {
//     var drink = 'juice';
// }

// // Switch Statement
// var job = 'teacher';
// switch (job) {
//     case 'teacher':
//         console.log(firstName + ' teaches kids how to code.');
//         break;
//     case 'driver':
//         console.log(firstName + ' drives an uber in Jakarta.');
//         break;
//     case 'designer':
//         console.log(firstName + ' designs beautiful websites.');
//         break;
//     default:
//         console.log(firstName + ' does something else.');
// }

// age = 10;
// switch (true) {
//     case age < 13 :
//         console.log(firstName + ' is a boy.');
//         break;
//     case age >= 12 && age < 20 :
//         console.log(firstName + ' is a teenager.');
//         break;
//     case age >= 20 && age < 30 :
//         console.log(firstName + ' is a young man.');
//         break;
//     default:
//         console.log(firstName + ' is a man.');
// }


// Truthy and falsy values and equality operators

// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values

// var height;
// height = 23;
// if (height || height === 0){
//     console.log('variable is defined');
// } else{
//     console.log('variable has NOT been defined');
// }

// // Equality operators
// if (height == '23') {
//     console.log('the == operator dose type coercion!');
// }

// var scoreSultan = (89 + 120 + 103) / 3;
// var scoreMike = (116 + 94 + 123) / 3;
// var scoreMary = (97 + 134 + 105) / 3;
// console.log(scoreSultan, scoreMike);

// if (scoreSultan > scoreMike && scoreSultan > scoreMary) {
//     console.log('Sultan\'s team wins with ' + scoreSultan + ' points');
// } else if (scoreMike > scoreSultan && scoreMike > scoreMary) {
//     console.log('Mike\'s team wins with ' + scoreMike + ' points');
// } else if (scoreMary > scoreSultan && scoreMary > scoreSultan) {
//     console.log('Mary\'s team wins with ' + scoreMary + ' points');
// } else {
//     console.log('There is a draw');
// }

// functions

// function calculateAge(birthYear) {
//     return 2018 - birthYear;
// }

// // var ageJohn = calculateAge(1990);
// // console.log(ageJohn);

// function yearsUntilRetirement(year, firstName)
// {
//     var age = calculateAge(year);
//     var retirement = 60 - age;
//     if (retirement > 0) {
//         console.log(firstName + ' retires in ' + retirement + ' years.');
//     } else {
//         console.log(firstName + ' is already retired.');
//     }
// }

// yearsUntilRetirement(1998, 'Sultan');
// yearsUntilRetirement(1990, 'Mike');
// yearsUntilRetirement(1945, 'jane');


// Function Statements and Expressions
// Function declaration
// function whatDoYouDo(job, firstName){

// }

// Function expression
// var whatDoYouDo = function(job, firstName){
//     switch(job) {
//         case 'teacher':
//             return firstName + ' teaches kids how to code.';
//         case 'driver':
//             return firstName + ' drives a cab in Jakarta';
//         case 'designer':
//             return firstName + ' designs beautiful websites';
//         default:
//             return firstName + ' does something else';
//     }
// }

// console.log(whatDoYouDo('teacher', 'Sultan'));
// console.log(whatDoYouDo('designer', 'Mike'));
// console.log(whatDoYouDo('retired', 'Jane'));


// Arrays

// Initialize new array
// var names = ['Sultan', 'Mark', 'Jane'];
// var years = new Array(1990 , 1996, 1948);

// console.log(names[0]);
// console.log(names.lenght);

// // Mutate Array data
// names[1] = 'Ben';
// names[names.length] = 'Mary';
// console.log(names);

// // Different data types

// var sultan = ['Sultan', 'Muttaqin', 1998, 'webdev', false];

// sultan.push('blue');
// sultan.unshift('Mr.');
// console.log(sultan);
// sultan.pop();
// sultan.shift();
// console.log(sultan);

// console.log(sultan.indexOf(1998));
// var isDesigner = sultan.indexOf('designer') === -1 ? 'Sultan is Not a designer' : 'Sultan Is a designer';
// console.log(isDesigner);

// function tipCalculator(bill) {
//     var percentage;
//     if (bill < 50) {
//         percentage = .2;
//     } else if (bill >= 50 && bill < 200) {
//         percentage = .15;
//     } else {
//         percentage = .1;
//     }
//     return percentage * bill;
// }

// var bills = [124, 48, 268];
// var tips = [tipCalculator(bills[0]), tipCalculator(bills[1]), tipCalculator(bills[2])];
// var finalValues = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(tips, finalValues);


// Objects and Properties

// Object literal
// var sultan = {
//     firstName: 'Sultan',
//     lastName: 'Smith',
//     birthYear: '1998',
//     family: ['Mark', 'Jane', 'Bob'],
//     job: 'webdev',
//     isMarried: 'false'
// };
// console.log(sultan.firstName);
// console.log(sultan['lastName']);
// var x = 'birthYear';
// console.log(sultan[x])

// sultan.job = 'designer';
// sultan['isMarried'] = true;
// console.log(sultan);

// // New Object Syntax
// var jane = new Object();
// jane.firstName = 'Jane';
// jane.birthYear = 1999;
// jane['lastName'] = 'Smith';
// console.log(jane);


// Objects and Methods

// var sultan = {
//     firstName: 'Sultan',
//     lastName: 'Smith',
//     birthYear: '1998',
//     family: ['Mark', 'Jane', 'Bob'],
//     job: 'webdev',
//     isMarried: 'false',
//     calcAge: function(birthYear) {
//         this.age = 2018 - this.birthYear;
//     }
// };
// sultan.calcAge();
// console.log(sultan);

// //example BMI
// var sultan = {
//     fullName: 'Sultan imam',
//     mass: 55,
//     height: 1.70,
//     calcBmi: function() {
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     }
// }
// var mark = {
//     fullName: 'Mark bob',
//     mass: 78,
//     height: 1.80,
//     calcBmi: function() {
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     }
// }

// sultan.calcBmi();
// mark.calcBmi();
// if (sultan.calcBmi() > mark.calcBmi()) {
//     console.log(sultan.fullName + ' has a higher BMI of ' + john.bmi);
// } else if (mark.calcBmi() > sultan.calcBmi()){
//     console.log(mark.fullName + ' has a highter BMI of ' + mark.bmi);
// } else {
//     console.log('They have the same BMI');
// }


// Loops and iteration
// For loop
// for (var i = 0; i < 10; i++){
//     console.log(i);
// }

// var sultan = ['Sultan', 'Imam', 1998, 'webdev', false];

// for (var i = 0; i < sultan.length; i++){
//     console.log(sultan[i]);
// }

// // While loop
// var i = 0;
// while(i < sultan.length) {
//     console.log(sultan[i]);
//     i++;
// }

// // continue and break statements
// var sultan = ['Sultan', 'Imam', 1998, 'webdev', false];
// console.log(sultan.length);
// for (var i = 0; i < sultan.length; i++){
//     if (typeof sultan[i] !== 'string') continue;
//     console.log(sultan[i]);
// }

// for (var i = 0; i < sultan.length; i++){
//     if (typeof sultan[i] !== 'string') break;
//     console.log(sultan[i]);
// }

// // Looping backwards
// for (var i = sultan.length - 1; i >= 0; i--){
//     console.log(sultan[i]);
// }

// example 
var sultan = {
    fullName: 'Sultan imam',
    bills: [124, 48, 268, 180, 42],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];
        for (var i = 0; i < this.bills.length; i++){
            // Determine percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];
            if (bill < 50) {
                percentage = .2;
            } else if(bill >= 50 && bill < 200) {
                percentage = .15;
            } else {
                percentage = .1;
            }
            // Add results to the corresponing arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;``
        }
    }
}

var mark = {
    fullName: 'Mark bob',
    bills: [77, 375, 110, 45, 42],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];
        for (var i = 0; i < this.bills.length; i++){
            // Determine percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];
            if (bill < 100) {
                percentage = .2;
            } else if(bill >= 100 && bill <= 300) {
                percentage = .1;
            } else {
                percentage = .25;
            }
            // Add results to the corresponing arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;``
        }
    }
}

function calcAverage(tips) {
    var sum = 0;
    for (var i = 0; i < tips.length; i++) {
        sum = sum + tips[i];
    }
    return sum / tips.length;
}
// 2, 6, 4 -> 0 / 2 / 8 / 12

// Do the calculations
sultan.calcTips();
mark.calcTips();
sultan.average = calcAverage(sultan.tips);
mark.average   = calcAverage(mark.tips);
console.log(sultan, mark);

if (sultan.average > mark.average) {
    console.log(sultan.fullName + '\'s family pays higher tips, with an average af $' + sultan.average);
} else if (mark.average > john.average) {
    console.log(mark.fullName + '\'s family pays higher tips, with an average of $' + marka.average)
}