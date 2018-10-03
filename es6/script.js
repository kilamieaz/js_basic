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
/**
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
*/

// Lecture: Rest parameters
/**
// // ES5
// function isFullAge5() {
//     // console.log(arguments);
//     var argsArr = Array.prototype.slice.call(arguments);
//     argsArr.forEach(function(cur) {
//         console.log((2018 - cur) >= 18);
//     })
// }

// // isFullAge5(1998, 2003, 2002);
// // isFullAge5(1998, 2003, 2002, 1965, 2016);

// // ES6
// function isFullAge6(...years) {
//     // console.log(years);
//     years.forEach(cur => console.log((2018 - cur) >= 18));
// }
// isFullAge6(1998, 2003, 2002);

// ES5
function isFullAge5(limit) {
    var argsArr = Array.prototype.slice.call(arguments, 1);
    argsArr.forEach(function(cur) {
        console.log((2018 - cur) >= limit);
    })
}

// isFullAge5(21, 1998, 2003, 2002);
// isFullAge5(1998, 2003, 2002, 1965, 2016);

// ES6
function isFullAge6(limit,...years) {
    // console.log(years);
    years.forEach(cur => console.log((2018 - cur) >= limit));
}
isFullAge6(16, 1998, 2003, 2002);
*/

// Lecture: default parameters
/**
// ES5
// function SmithPerson(firstname, yearOfBirth, lastName, nationality) {
//     lastName == undefined ? lastName = 'smith' : lastName = lastName;
//     nationality == undefined ? nationality = 'indonesia' : nationality = nationality;
//     this.firstname = firstname;
//     this.lastName = lastName;
//     this.yearOfBirth = yearOfBirth;
//     this.nationality = nationality;
// }

// ES6
function SmithPerson(firstname, yearOfBirth, lastName = 'Smith', nationality = 'indonesia') {
    this.firstname = firstname;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

var sultan = new SmithPerson('sultan', 1998);
var emily = new SmithPerson('emily', 1994, 'diaz', 'spanish');
*/

// Lecture: Maps
/**
const question = new Map();
question.set('question', 'What is the official name of the lateste mojor JavaScript version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer :D');
question.set(false, 'Wrong, please try again!');

console.log(question.get('question'));
// console.log(question.size);
question.delete(4);

if (question.has(4)) {
    // question.delete(4);
    console.log('Answer 4 is here');
}

// question.clear();

// question.forEach((val, key) => console.log(`this is ${key}, and it's set ${val}`));

for (let [key, value] of question.entries()) {
    if (typeof(key) === 'number') {
        console.log(`Answer ${key}: ${value}`);
    }
}

const ans = parseInt(prompt('Write the correct answer'));
console.log(question.get(ans === question.get('correct')));
*/

// Lecture: Classes

/**
// ES5
var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

var sultan5 = new Person5('Sultan', 1998, 'webdev');

//ES6
class Person6 {
    constructor (name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge() {
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }

    static greeting() {
        console.log('Hey there:');
    }
}

const sultan6 = new Person6('Sultan', 1998, 'webdev');
Person6.greeting();
*/

// Lecture: Classes and subclasses
/**
var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals) {
    Person5.call(this, name, yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
}

Athlete5.prototype = Object.create(Person5.prototype);
Athlete5.prototype.wonMedal = function() {
    this.medals++;
    console.log(this.medals);
}

var johnAthlete5 = new Athlete5('john', 1990, 'swimmer', 3, 10);

console.log('ES5')
johnAthlete5.calculateAge();
johnAthlete5.wonMedal();
console.log('----------')

//ES6
class Person6 {
    constructor (name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge() {
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }
}

class Athlete6 extends Person6 {
    constructor(name, yearOfBirth, job, olympicGames, medals) {
        super(name, yearOfBirth, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }

    wonMedal(){
        this.medals++;
        console.log(this.medals);
    }
}

const johnAthlet6 = new Athlete6('john', 1990, 'swimmer', 3, 10);
console.log('ES6')
johnAthlet6.calculateAge();
johnAthlet6.wonMedal();
*/

/////////////////////////////////
// CODING CHALLENGE

/*

Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.

*/

class Element {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}


class Park extends Element {
    constructor(name, buildYear, area, numTrees) {
        super(name, buildYear);
        this.area = area; //km2
        this.numTrees = numTrees;
    }
    
    treeDensity() {
        const density = this.numTrees / this.area;
        console.log(`${this.name} has a tree density of ${density} trees per square km.`);
    }
}


class Street extends Element {
    constructor(name, buildYear, length, size = 3) {
        super(name, buildYear);
        this.length = length;
        this.size = size;
    }
    
    classifyStreet () {
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');
        console.log(`${this.name}, build in ${this.buildYear}, is a ${classification.get(this.size)} street.`);
    }
}


const allParks = [new Park('Green Park', 1987, 0.2, 215),
                 new Park('National Park', 1894, 2.9, 3541),
                 new Park('Oak Park', 1953, 0.4, 949)];

const allStreets = [new Street('Ocean Avenue', 1999, 1.1, 4),
                   new Street('Evergreen Street', 2008, 2.7, 2),
                   new Street('4th Street', 2015, 0.8),
                   new Street('Sunset Boulevard', 1982, 2.5, 5)];


function calc(arr) {
    
    const sum = arr.reduce((prev, cur, index) => prev + cur, 0);
    
    return [sum, sum / arr.length];
    
}


function reportParks(p) {
    
    console.log('-----PARKS REPORT-----');
    
    // Density
    p.forEach(el => el.treeDensity());
    
    // Average age
    const ages = p.map(el => new Date().getFullYear() - el.buildYear);
    const [totalAge, avgAge] = calc(ages);
    console.log(`Our ${p.length} parks have an average of ${avgAge} years.`);
    
    // Which park has more than 1000 trees
    const i = p.map(el => el.numTrees).findIndex(el => el >= 1000);
    console.log(`${p[i].name} has more than 1000 trees.`);
    
}


function reportStreets(s) {
    
    console.log('-----STREETS REPORT-----');
    
    //Total and average length of the town's streets
    const [totalLength, avgLength] = calc(s.map(el => el.length));
    console.log(`Our ${s.length} streets have a total length of ${totalLength} km, with an average of ${avgLength} km.`);
    
    // CLassify sizes
    s.forEach(el => el.classifyStreet());
}

reportParks(allParks);
reportStreets(allStreets);