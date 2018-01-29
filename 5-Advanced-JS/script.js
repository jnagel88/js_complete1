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

// var personProto = {
// 	calcAge: function(){
// 		console.log(2018 - yearOfBirth);
// 	}
// };

// var john = Object.create(personProto);

// john.name = 'john';
// john.yearOfBirth = 1990;
// john.job = "teacher";


// var jane = Object.create(personProto, 
// {
// 	name: {value: 'Jane'},
// 	yearOfBirth: {value: 1969},
// 	job: {value: 'designer'}
// });	




///////////////////////////////////////////
//Lecture 55: Primitives vs Objects

// //primitives
// var a = 23;
// var b = a;
// a = 46

// console.log(a);
// console.log(b);


// //Objects
// var obj1 = { 
// 	name:'john',
// 	age: 26
// };

// var obj2 = obj1;
// obj1.age = 30;

// console.log(obj1.age)
// console.log(obj2.age)


// //functions
// var age = 27;
// var obj = {
// 	name:'Jonas',
// 	city: 'lisbon'
// };

// function change(a, b) {
// 	a = 30;
// 	b.city = "San francisco";
// }

// change(age, obj);
// console.log(age);
// console.log(obj.city);

//////////////////////////////////////////
//Lecture 56:Functions as Arguments

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
	var arrRes = [];
	for (var i = 0; i< arr.length; i++) {
		arrRes.push(fn(arr[i]));
	}
	return arrRes;
}

function calcAge(el) {
	return 2018 - el;
}

function isFullAge(el) {
	return el >= 18;
}

function maxHeartRate(el) {

	if(el >= 18 && el <= 81){
	return Math.round(206.9 - (0.67 * el));
} else{
	return -1;
	}
}


var ages = arrayCalc(years, calcAge);

var fullAges = arrayCalc(ages, isFullAge);

var rates = arrayCalc(ages, maxHeartRate);


console.log(years);
console.log(ages);
console.log(fullAges);
console.log(rates)