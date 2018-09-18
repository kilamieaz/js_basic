// Function constructor
/**
var john = {
    name: 'John',
    yearOfBirth: 1998,
    job: 'teacher'
};

var Person = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};
Person.prototype.calculateAge = 
function() {
    console.log(2018 - this.yearOfBirth)
};
Person.prototype.lastName = 'Muttaqin';

var sultan = new Person('Sultan', 1998, 'webdev');
var jane = new Person('Jane', 1978, 'retired');
var mark = new Person('Mark', 1988, 'design');
sultan.calculateAge();
jane.calculateAge();
mark.calculateAge();
console.log(sultan.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
 */

//  Object.create
/**
var personProto = {
    calculateAge: function() {
        console.log(2018 - this.yearOfBirth);
    }
};
var sultan = Object.create(personProto);
sultan.name = 'sultan';
sultan.yearOfBirth = 1998;
sultan.job = 'teacher';

var jane = Object.create(personProto, {
    name: { value: 'Jane'},
    yearOfBirth: { value: 1969},
    job: { value: 'Designer'}
});
 */

//  Primitives vs objects
/**
// Primitive
var a = 23;
var b = a; // its copy
a = 46; 
console.log(a); // 46
console.log(b); // 23 = tidak ikut berubah (hold)

// Objects
var obj1 = {
    name: 'sultan',
    age: 26
};
var obj2 = obj1; // this is same object in memory
obj1.age = 30;
console.log(obj1.age); //30
console.log(obj2.age); //30

// Functions
var age = 20;
var obj = {
    name: sultan,
    city: jambi
};
function change(a, b) {
    a = 30;
    b.city = 'Yogyakarta';
}

change(age, obj);
console.log(age);
console.log(obj.city);
 */

//  Passing functions as arguments
/**
var years = [1998, 1965, 1942, 2003, 2012];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2018 - el;
}

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if(el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);
console.log(ages);
console.log(fullAges);
console.log(rates);
 */

//  Function returning functions

function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach, ' + name + '?') 
        };
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do yo do?');
        }
    }
}
//cara 1
var teacherQuestion = interviewQuestion('teacher');
teacherQuestion('Sultan');

var designerQuestion = interviewQuestion('designer');
designerQuestion('Sultan');
//cara 2
interviewQuestion('teacher')('Mark');