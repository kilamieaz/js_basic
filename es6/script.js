// Lecture: let and const
/**
// ES5
var name5 = 'sultan imam';
var age5 = 23;
name5 = 'sultan imam muttaqin';
console.log(name5);   //sultanimam muttaqin

// ES6
const name6 = 'sultan imam';   // const = cannot changes/immutable
let age6 = 23;
// name6 = 'sultan imam muttaqin'; // Error = Assignment to constant variable. 
// console.log(name6); 

// block-scoped = let,const
// function-scoped = var
// ES5
function driversLicensce5(passedTest) {
    if (passedTest) {
        var firstName = 'sultan';
        var yearOfBirth = 1990;
    }
    console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
}
driversLicensce5(true);

// ES6
function driversLicensce6(passedTest) {
    let firstName;
    const yearOfBirth = 1998;

    if (passedTest) {
        firstName = 'sultan';
    }

    console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
}
driversLicensce6(true);


// var i = 23;
// for (var i = 0; i < 5; i++) {
//     console.log(i);
// }
// console.log(i);

let i = 23;
for (let i = 0; i < 5; i++) {
    console.log(i);
}
console.log(i);
*/


// Lecture: blocks and IIFEs
/**
// ES5 (IIFE)
(function() {
    var c = 3;
})();

// ES6 (block)
{
    const a = 1;
    let b = 2;
    var c = 3;
}

console.log(c);
console.log(a + b);
 */

//  Lecture: strings?
/**
let firstName = 'sultan';
let lastName  = 'imam';
const yearOfBirth = 1998;

function calcAge(year) {
    return 2018 - year;
}

// ES5
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' years old.');

// ES6 (template literals)
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old.`)

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('s'));
console.log(n.endsWith('s'));
console.log(n.includes('s'));
console.log(firstName.repeat(5));
console.log(`${firstName} `.repeat(5));
 */

 // Lecture: Arrow functions (basic)
/**
 const years = [1990, 1965, 1982, 1935];
 // ES5
 var ages5 = years.map(function(el) {
    return 2018 - el;
 });
console.log(ages5);

// ES6
let ages6 = years.map(el => 2018 - el);
console.log(ages6);

ages6 = years.map((el, index) => `Age element ${index + 1}: ${2018 - el}.`);
console.log(ages6);

ages6 = years.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age element ${index + 1}: ${age}.`;
});
console.log(ages6);

// ES5
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        var self = this;
        document.querySelector('.green').addEventListener('click', function() {
            var str = 'This is box number ' + self.position + ' and it is ' + self.color;
            alert(str);
        });
    }
}
// box5.clickMe();

// ES6
const box6 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
}
box6.clickMe();

// const box66 = {
//     color: 'green',
//     position: 1,
//     clickMe: () => {          // be carefull
//         document.querySelector('.green').addEventListener('click', () => {
//             var str = 'This is box number ' + this.position + ' and it is ' + this.color;
//             alert(str);
//         });
//     }
// }
// box66.clickMe();

 // Lecture: arrrow function (lexical this keyword)
 function Person(name) {
     this.name = name;
 }

//  ES5
Person.prototype.myFriends5 =
function(friends) {
    var arr = friends.map(function(el){
        return this.name + ' is friends with ' + el;
    }.bind(this));
    console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark'];
new Person('Sultan').myFriends5(friends);

// ES6
Person.prototype.myFriends6 =
function(friends) {
    var arr = friends.map(el => `${this.name} is friends with ${el}`);
    console.log(arr);
}

new Person('Imam').myFriends6(friends);
*/

// Lecture: Destructuring
/**
// ES5
var sultan = ['sultan', 20];
var name5 = sultan[0];
var age5 = sultan[1];

// ES6 (Destructuring!) we destructured
const [name6, age6] = ['sultan', 20];
console.log(name6);
console.log(age6);

const obj = {
    firstName: 'sultan',
    lastName: 'imam'
};
const {firstName, lastName} = obj;
console.log(firstName);
console.log(lastName);

const {firstName: a, lastName: b} = obj;
console.log(a);
console.log(b);

function calcAgeRetirement(year) {
    const age = new Date().getFullYear() - year;
    return [age, 65 - age];
}

const [age, retirement] = calcAgeRetirement(1998);
console.log(age);
console.log(retirement);
*/

// Lecture: Arrays
/**
const boxes = document.querySelectorAll('.box');
// console.log(boxes); //(nodeList = browser api)

// ES5
var boxesArr5 = Array.prototype.slice.call(boxes);
// console.log(boxesArr5); //(array = javascript api)
boxesArr5.forEach(function(cur) {
    cur.style.backgroundColor = 'dodgerBlue';
})

// ES6
const boxesArr6 = Array.from(boxes);
boxesArr6.forEach(cur => cur.style.backgroundColor = 'dodgerBlue');

// ES5
for(var i = 0; i < boxesArr5.length ; i++){
    if(boxesArr5[i].className === 'box blue') {
        continue;
        //break;
    }
    boxesArr5[i].textContent = 'I changed to blue';
}

// ES6 (FOR OF)
for (const cur of boxesArr6) {
    if (boxesArr6.className.includes('blue')) {
        continue;
    }
    cur.textContent = 'I changed to blue';
}


// ES5
var ages = [12, 17, 7, 21 , 13, 11];
var full = ages.map(function(cur) {
    return cur >= 18;
});
console.log(full); 
console.log(full.indexOf(true)); //3
console.log(ages[full.indexOf(true)]); //21

//ES6
console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));
*/

// lecture: Spread operator

function addFourAges (a, b, c, d) {
    return a + b + c +d;
}

var sum1 = addFourAges(18, 35, 12, 21);
console.log(sum1);

// ES5
var ages = [18, 35, 12 , 21];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

// ES6 (spread operator)
const sum3 = addFourAges(...ages);
console.log(sum3);

const familySultan = ['sultan', 'imam', 'muttaqin'];
const familyMiller = ['mary', 'bob', 'smith'];
const bigFamily = [...familySultan,...familyMiller];
console.log(bigFamily);

const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [h,...boxes];
console.log(h);
console.log(boxes);
console.log(all);

Array.from(all).forEach(cur => cur.style.color = 'purple');
// all.forEach(cur => cur.style.color = 'purple');