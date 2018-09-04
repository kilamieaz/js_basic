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
