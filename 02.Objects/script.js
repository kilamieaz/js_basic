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
/**
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
 */

// IIFE

/**
// function game() {
//     var score = Math.random() * 10;
//     console.log(score >= 5);    
// }
// game();

(function () {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

(function (goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5);
 */

 // Closures
/**
 function retirement(retirementAge) {
     var a = ' years left until retirement.'
     return function (yearOfBirth) {
         var age = 2018 - yearOfBirth;
         console.log((retirementAge - age) + a);
     }
 }

 var retirementUS = retirement(66);
 var retirementGermany = retirement(65);
 var retirementIceland = retirement(67);
 retirementUS(1998);
 retirementGermany(1998);
 retirementIceland(1998);

function interviewQuestion(job) {
    return function (name) {
        if (job === 'designer') {
            console.log(name + ', can you please explain what UX design is?');
        } else if (job === 'teacher') {
            console.log('What subject do you teach, ' + name + '?') 
        } else {
            console.log('Hello ' + name + ', what do yo do?');
        }
    }
}

var interviewDesigner = interviewQuestion('designer');
var interviewTeacher = interviewQuestion('teacher');
var interviewAnother = interviewQuestion('another');
interviewDesigner('sultan')
interviewTeacher('sultan')
interviewAnother('sultan')
*/
/**
var sultan = {
    name: 'sultan',
    age: 20,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', Ladies and gentleman! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
        } else if (style === 'friendly') {
            console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
        }
    }
}
sultan.presentation('formal', 'morning')

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};

// call method (want to use presentation method from jhon, but setting the this variable to "emily")
sultan.presentation.call(emily, 'formal', 'afternoon')

// apply method
// sultan.presentation.apply(emily,['friendly', 'afternoon']);

// bind method

// carrying = we create function based on another function with some preset parameter
var sultanFriendly = sultan.presentation.bind(sultan, 'friendly');
sultanFriendly('morning');
sultanFriendly('night');


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

function isFullAge(limit, el) {
    return el >= limit;
}

var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages)
console.log(fullJapan)
 */

// Fun quiz

function Question(question, possibleAnswer, correctAnswer){
    this.question = question;
    this.possibleAnswer = possibleAnswer;
    this.correctAnswer = correctAnswer;
};

Question.prototype.displayQuestion = 
function() {
    console.log(this.question);
    for (var i = 0; i < this.possibleAnswer.length; i++){
        console.log(i + ' : ' +  this.possibleAnswer[i])
    }
};

Question.prototype.checkAnswer = 
function(ans, callback) {
    var sc;
    if (ans === this.correctAnswer){
        console.log('Correct answer!')
        sc = callback(true);
    } else {
        console.log('Wrong answer. Try again :)')
        sc = callback(false);
    }
    this.displayScore(sc);
};

Question.prototype.displayScore = 
function(score){
    console.log('Your current score is: ' + score);
    console.log('--------------------------------')
};

var question1 = new Question('Best language programming', ['javascript','python'], 0);
var question2 = new Question('are you alive', ['yes','no'], 0);
// console.log(question1);
// console.log(question2);

function score() {
    var sc = 0;
    return function(correct) {
        if(correct) {
            sc++;
        }
        return sc;
    }
}

var keepScore = score();

function nextQuestion() {
    var questions = [question1, question2];
    // console.log(questions);
    var randomNumber = Math.floor(Math.random() * questions.length);
    
    questions[randomNumber].displayQuestion();
    
    var answer = prompt('Please select the correct answer.');
    
    if (answer !== 'exit') {
        questions[randomNumber].checkAnswer(parseInt(answer), keepScore);
        nextQuestion();
    }
}

nextQuestion();