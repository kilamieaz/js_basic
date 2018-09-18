// Function constructor
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