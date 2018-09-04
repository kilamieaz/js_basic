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

var firstname = 'Sultan';
var age = 20;

if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age >= 12 && age < 20){ //between 13 and 20
    console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30){
    console.log(firstName + ' is a young man.');
} else {
    console.log(firstName + ' is a man.');
}