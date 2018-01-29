// Section 5,Lecture 52: Function Conctructor

// var john = {
// 	name: 'John',
// 	yearOfBirth: 1990,
// 	job: 'teacher'
// };

// var Person = function (name, yearOfBirth, job) {
// 	this.name = name;
// 	this.yearOfBirth = yearOfBirth;
// 	this.job = job;
// }

// Person.prototype.calcAge = function () {
// 		console.log(2018-this.yearOfBirth);
// 	}

// Person.prototype.lastname = 'smith';

// var john = new Person('john', 1990, 'teacher');
// var jane = new Person('jane', 1969, 'designer')
// var mark = new Person('mark', 1948, 'retired')

// john.calcAge();
// jane.calcAge();
// mark.calcAge();

// console.log(john.lastname);
// console.log(jane.lastname);
// console.log(mark.lastname);



/////////////////////////////////////////////////
// lecture 54: Object.create

var personProto = {
	calcAge: function(){
		console.log(2018 - yearOfBirth);
	}
};

var john = Object.create(personProto);

john.name = 'john';
john.yearOfBirth = 1990;
john.job = "teacher";


var jane = Object.create(personProto, 
{
	name: {value: 'Jane'},
	yearOfBirth: {value: 1969},
	job: {value: 'designer'}
});	

