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