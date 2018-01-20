// //Variable lecture 1
// // console.log('hello World');

// // var name = 'John';
// // console.log(name);

// // var lastName = 'smith';
// // console.log(lastName);

// // var age = 26;
// // console.log(age);

// // var fullAge = true;
// // console.log(fullAge);

// // lecture variables 2
// var name = 'John';
// var age = 26;

// // console.log(name + age);


// // var job, isMarried;

// // console.log(job)

// job = 'teacher'
// isMarried = false

// console.log(name + ' is a ' + age + " year old " + job +'. Is he married? ' + isMarried +'.');

// age = "thirty six";
// job = "driver";

// var lastName = promt("what is your last name?")
// console.log(lastName)

// alert(name + ' is a ' + age + " year old " + job +'. Is he married? ' + isMarried +'.');












// Lecture 11: Operators

// var now = 2018
// var birthYear = now - 26;



// birthYear = now - 26 *2;
// console.log(birthYear);

// var agejohn = 30;
// var agemark = 30;

// agejohn = agemark =(3 + 5) * 4 - 6;
// console.log(agejohn);
// console.log(agemark);

// agemark *= 2;
// agejohn++
// console.log(agejohn);
// console.log(agemark);



/////////////////////////////////////////////
// Lecture 12: if/else statements

// var name = 'john';
// var age = 26;
// var isMarried = 'no';

// if (isMarried === 'yes') {
// 	console.log(name + ' is married.');
// } else {
// 	console.log(name + ' will hopefully marry soon.');
// }

// if (23==="23"){
// 	console.log("something to print...");
// }




///////////////////////////////////////////////
// Lecture 13: boolean logic and switch

// var age = 35

// if (age <= 19) {
// 	console.log('john is a teenager')
// } else if(age >= 20 && age < 30){
// 	console.log("john is a young man.")
// }
//  else {
// 	console.log("john is a man")
// }


// var job = 'teacher'

// job = prompt('What does john do?');

// switch(job){
// 	case 'teacher':
// 		console.log( 'John teaches kids');
// 		break;
// 	case 'driver':
// 		console.log("John drives a cab.");
// 		break;
// 	case 'cop':
// 		console.log('john helps fight crime.');
// 		break;
// 	default:
// 		console.log('John does something else.');
// }




///////////////////////////////////////////////
// coding challenge 1 



// var p1h;
// var p1a;
// var p2h;
// var p2a;

// p1h = prompt("Player one height (in Centimeters):");
// p1a = prompt("player one age:");
// var p1ai = parseInt(p1a);
// var p1hi = parseInt(p1h);

// p2h = prompt("Player two height (in Centimeters:");
// p2a = prompt("player two age:");
// var p2ai = parseInt(p2a);
// var p2hi = parseInt(p2h);

// var p1score = p1ai * 5 + p1hi;
// var p2score = p2ai * 5 + p2hi;

// if (p1score === p2score){
// 	console.log("TIE!!!")
// } else if(p2score>p1score){
// 	console.log("Player Two wins with " + p2score+ "!")
// } else {
// 	console.log("Player One wins with " + p1score + "!")
// }











///////////////////////////////////////////////////
// Lecture 16: Functions

// function calcAge(yearOfbirth) {
// 	// body...
// 	var age = 2018 - yearOfbirth;
// 	return age;
// }

// var joeAge = calcAge(1988);
// var elisaAge = calcAge(1975);
// // console.log(elisaAge);

// function yearsToRetire(name, yearOfbirth) {
// 	var age = calcAge(yearOfbirth);
// 	var retirement = 65 - age;
// 	if (retirement >= 1){
// 		console.log(name + ' can retire in ' + retirement + ' years.');
// 	} else if (retirement<= 0){
// 		console.log(name + ' can retire now.')
// 	}

// }

// yearsToRetire("joe", 1988); 
// yearsToRetire("elisa", 1975);
// yearsToRetire("john", 1955);



/////////////////////////////////////////////////
// Lecture 17: Statements and Expressions


// function someFun(par){
// 	//code
// }



// var someFun = Function(par) {
// 	//code
// }

// // expressions

// 3 + 4;
// var x = 3;

// //statements
// action but not immediate value

// if (x===5){
// 	//do something
// }


/////////////////////////////////////////
//lecture 18: arrays


// var names = ['joe', 'elisa', 'jason'];
// var years = new Array(1988, 1975, 1989);
// console.log(names[1]);

// names[1] = "Ben";
// console.log(names[1]);

/*
var john = ['john', 'smith', 1990, 'teacher', false];

john.push('blue');
// console.log(john);
john.unshift('mr.')
// console.log(john);

john.pop();
// console.log(john);

john.shift();
// console.log(john);

// alert(john.indexOf('smith'));

if(john.indexOf('teacher') === -1);
	console.log('John is not a teacher');
*/


///////////////////////////////////////////////////
//lecture 19

// var arr = [1,2,3]

// var john = {
// 	name: 'john', 
// 	lastName: 'Smith',
// 	birthYear: 1990,
// 	job: 'teacher',
// 	isMarried:false
// };

// console.log(john.lastName);
// console.log(john['lastName']);


// var xyz = "job";
// console.log(john[xyz]);


// john.lastName = 'Miller';
// john['job'] = 'programmer';

// console.log(john)


// var jane = new Object();
// jane.name = 'Jane';
// jane.lastName = 'Smith';
// jane.birthYear = 1969
// jane.job = 'retired'
// jane.isMarried = true;


///////////////////////////////////////////
// Lecture 20


// var john = {
// 	name: 'john', 
// 	lastName: 'Smith',
// 	birthYear: 1990,
// 	job: 'teacher',
// 	isMarried:false,
// 	family: ['Jane', 'Mark', 'Bob'],
// 	calcAge: function(){
// 		return 2018 - this.birthYear;
// 	}
// };

// console.log(john.calcAge(1990));

// console.log(john.calcAge());

// var age = john.calcAge();

// john.age = age;

// console.log(john)


// var john = {
// 	name: 'john', 
// 	lastName: 'Smith',
// 	birthYear: 1990,
// 	job: 'teacher',
// 	isMarried:false,
// 	family: ['Jane', 'Mark', 'Bob'],
// 	calcAge: function(){
// 		// return 2018 - this.birthYear;
// 		this.age = 2018 - this.birthYear;
// 	}
// };


// john.calcAge();
// console.log(john);



//////////////////////////////////////////////////
//Lecture 21: loops and iteration

// for (var i = 0; i < 10; i++){
// 	console.log(i);
// }

// var names = ['john', 'jane', 'mary', 'mark', 'bob']

// for (var i = 0; i<names.length; i++){
// 	console.log(names[i]);
// }

// //for loops
// for (var i = names.length -1; i >= 0 ;i--) {
// 	console.log(names[i]);
// }

//While loops
// var i = 0;
// while(i < names.length){
// 	console.log(names[i]);
// 	i++;
// }

// for (var i = 0; i <=5; i++) {
// 	console.log(i);

// 	if (i === 3){
// 		break;
// 	}
// }


// for (var i = 0; i <=5; i++) {
// 	if (i === 3){
// 		continue;
// 	}

// 	console.log(i);
// }

/////////////////////////////////////////////////
//Lecture 21: Coding Challenge 2

var years = [1988, 1975, 1955, 2001];
var result = [];
var age = [];

// for (var i = 0; i < years.length; i++) {
// 	age[i] = 2018 - years[i];
// }

// console.log(age);

// for (var i = 0; i < age.length; i++){
// 	if (age[i]<18) {
// 		console.log("person " + (i + 1) + " is " + age[i] + " years old, and is not of age.")
// 		result[i] = false;
// 	} else {
// 		console.log("person " + (i + 1) + " is " + age[i] + " years old, and is of age.")
// 		result[i] = true;
// 	}
// }

// console.log(result)

// function resultsArray(years){
// 	for (var i = 0; i < years.length; i++) {
// 	age[i] = 2018 - years[i];
// }

// 	console.log(age);

// 	for (var i = 0; i < age.length; i++){
// 		if (age[i]<18) {
// 			result[i] = false;
// 		} else {
// 			result[i] = true;
// 		}
// 	}
// }

// var full_1 = resultsArray(years);



///////////////////////////////////////////////////
// Lecture 24: ES5, ES6 / ES2015 & ES2016










